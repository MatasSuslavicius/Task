using AutoMapper;
using DemoTask.Data.Dtos.Records;
using DemoTask.Data.Entities;
using Microsoft.Extensions.Hosting;

namespace DemoTask.Data
{
    public class DemoTaskProfile : Profile
    {
        public DemoTaskProfile()
        {
            CreateMap<Record, RecordDto>();
            CreateMap<CreateRecordDto, Record>();
            
        }
    }
}
