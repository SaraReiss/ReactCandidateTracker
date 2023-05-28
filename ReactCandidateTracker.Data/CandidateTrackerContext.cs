using Microsoft.EntityFrameworkCore;

namespace ReactCandidateTracker.Data
{
    public class CandidateTrackerContext : DbContext
    {
        private string _connectionString;

        public CandidateTrackerContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Candidate> Candidates { get; set; }
    }

}