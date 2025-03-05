using System;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using template_main.Models;

namespace template_main.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {

        var dataLand = new DataLand
        {
            Id = "AA 0987654",
            Muc1 = new Dictionary<int, Person>
                {
                    { 1, new Person { PersonName = "Nguyễn Văn A", PersonCCCD = "231414141" } },
                    { 2, new Person { PersonName = "Nguyễn Văn B", PersonCCCD = "231414142" } },
                    { 3, new Person { PersonName = "Nguyễn Văn C", PersonCCCD = "231414143" } }
                },
            Muc2 = new Dictionary<int, Land>
                {
                    { 1, new Land { LandNumber = "01", LandMapNumber = "100m2", LandArea = "cac", LandClass = "abc", LandUseDate = "abc", LandUse = "abc", LandAddress = "abc", LandPurpose = "abc" } },
                    { 2, new Land { LandNumber = "02", LandMapNumber = "200m2", LandArea = "cac", LandClass = "abc", LandUseDate = "abc", LandUse = "abc", LandAddress = "abc", LandPurpose = "abc" } }
                },
            Muc3 = new Dictionary<int, Asset>
                {
                    { 1, new Asset { AssetName = "01", AssetArea = "100m2", AssetAreaUse = "01", AssetNumberFloor = "100m2", AssetStructure = "01", AssetLevel = "100m2", AssetUse = "01", AssetUseTime = "100m2" } },
                    { 2, new Asset { AssetName = "02", AssetArea = "200m2", AssetAreaUse = "02", AssetNumberFloor = "200m2", AssetStructure = "02", AssetLevel = "200m2", AssetUse = "02", AssetUseTime = "200m2" } }
                },
            Muc4 = new Dictionary<int, string>
                {
                    { 0, "~/image/img_re.png" }
                },
            IsCheckMuc2 = true,
            IsCheckMuc3 = true
        };
        return View(dataLand);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
