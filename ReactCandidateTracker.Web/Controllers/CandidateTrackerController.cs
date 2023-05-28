using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactCandidateTracker.Data;
using ReactCandidateTracker.Web.Models;
using System;
using System.Diagnostics.CodeAnalysis;

namespace ReactCandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateTrackerController : ControllerBase
    {
        private string _connectionString;

        public CandidateTrackerController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("add")]
        [HttpPost]
        public void Add(Candidate candidate)
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            repo.Add(candidate);
        }

        [HttpGet]
        [Route("getall")]
        public List<Candidate> GetAll()
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return repo.GetAll();
        }

        [HttpGet]
        [Route("getbyid")]
        public Candidate GetById(int id)
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return repo.GetById(id);
        }
        [HttpPost]
        [Route("update")]
        public void Update(Candidate candidate)
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            repo.UpdateStatus(candidate);
        }
        [HttpGet]
        [Route("getcount")]
        public StatusCountVm GetCount(RegistrationStatus status)
        {
            var repo = new CandidateTrackerRepository(_connectionString);
            return new StatusCountVm
            {

                Count = repo.GetCount(status)

            };
            

        }
    }
}
