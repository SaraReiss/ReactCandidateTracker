using Microsoft.Extensions.Configuration;
using System.Data;

namespace ReactCandidateTracker.Data
{
    public class CandidateTrackerRepository
    {
        private string _connectionString;

        public CandidateTrackerRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void Add(Candidate candidate)
        {
            using var context = new CandidateTrackerContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }
        public List<Candidate> GetAll()
        {
            using var context = new CandidateTrackerContext(_connectionString);
            return context.Candidates.ToList();
        }
        public Candidate GetById(int id)
        {
            using var context = new CandidateTrackerContext(_connectionString);
            return context.Candidates.FirstOrDefault(c=> c.Id == id);
        }
        public void UpdateStatus(Candidate candidate)
        {
            using var context = new CandidateTrackerContext(_connectionString);
            context.Candidates.Update(candidate);
            context.SaveChanges();

        }
        public int GetCount(RegistrationStatus status)
        {
            using var context = new CandidateTrackerContext(_connectionString);
            int count = context.Candidates.Count(c => c.RegistrationStatus == status);
            return count;
        }
       


    }

}