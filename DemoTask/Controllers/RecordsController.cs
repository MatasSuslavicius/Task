using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using AutoMapper;
using DemoTask.Data.Dtos.Records;
using DemoTask.Data.Entities;
using DemoTask.Data.Repositories;
using Microsoft.Extensions.Hosting;

namespace DemoTask.Controllers
{
    [ApiController]
    [Route("api/records")]
    public class RecordsController : ControllerBase
    {
        private readonly IRecordsRepository _recordsRepository;
        private readonly IMapper _mapper;

        public RecordsController(IRecordsRepository recordsRepository, IMapper mapper)
        {
            _recordsRepository = recordsRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<RecordDto>> GetAll()
        {
            var records = await _recordsRepository.GetAll();
            return records.Select(o => _mapper.Map<RecordDto>(o));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RecordDto>> Get(int id)
        {
            var record = await _recordsRepository.Get(id);
            if (record == null) return NotFound($"Record with id '{id}' not found.");
            
            return Ok(_mapper.Map<RecordDto>(record));
        }

        [HttpPost]
        public async Task<ActionResult<RecordDto>> Post(CreateRecordDto recordDto)
        {
            var record = _mapper.Map<Record>(recordDto);

            await _recordsRepository.Create(record);

            return Created($"/api/records/{record.Id}", _mapper.Map<RecordDto>(record));
        }

    }
}