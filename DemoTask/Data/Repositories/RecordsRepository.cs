using DemoTask.Data.Entities;
using System.Collections.Generic;
using System.Text.Json;
using DemoTask.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;

namespace DemoTask.Data.Repositories
{
    public interface IRecordsRepository
    {
        Task<List<Record>> GetAll();
        Task<Record> Get(int id);
        Task Create(Record record);
    }
    public class RecordsRepository : IRecordsRepository
    {
        private readonly DemoTaskContext _demoTaskContext;

        public RecordsRepository(DemoTaskContext demoTaskContext)
        {
            _demoTaskContext = demoTaskContext;
        }

        public async Task<List<Record>> GetAll()
        {

            return await _demoTaskContext.Records.ToListAsync();
        }

        public async Task<Record> Get(int id)
        {
            return await _demoTaskContext.Records.FirstOrDefaultAsync(o => o.Id == id);
        }

        public async Task Create(Record record)
        {

            _demoTaskContext.Records.Add(record);
            await _demoTaskContext.SaveChangesAsync();
        }

    }
}
