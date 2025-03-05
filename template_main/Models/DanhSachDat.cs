namespace template_main.Models
{
    public class DanhSachDat
    {
        class Person
        {
            public string PersonName { get; set; }
            public string PersonCCCD { get; set; }
        }

        class Land
        {
            public string LandNumber { get; set; }
            public string LandMapNumber { get; set; }
            public string LandArea { get; set; }
            public string LandClass { get; set; }
            public string LandUseDate { get; set; }
            public string LandUse { get; set; }
            public string LandAddress { get; set; }
            public string LandPurpose { get; set; }
        }

        class Asset
        {
            public string AssetName { get; set; }
            public string AssetArea { get; set; }
            public string AssetAreaUse { get; set; }
            public string AssetNumberFloor { get; set; }
            public string AssetStructure { get; set; }
            public string AssetLevel { get; set; }
            public string AssetUse { get; set; }
            public string AssetUseTime { get; set; }
        }

        class DataLand
        {
            public string Id { get; set; }
            public Dictionary<int, Person> Muc1 { get; set; }
            public Dictionary<int, Land> Muc2 { get; set; }
            public Dictionary<int, Asset> Muc3 { get; set; }
            public Dictionary<int, string> Muc4 { get; set; }
        }

        class check
        {
            public bool is_check { get; set; }
        }

        static void Main()
        {
            var danhSachDat = new DanhSachDat();

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
                        { 0, new Asset { AssetName = "01", AssetArea = "100m2", AssetAreaUse = "01", AssetNumberFloor = "100m2", AssetStructure = "01", AssetLevel = "100m2", AssetUse = "01", AssetUseTime = "100m2" } },
                        { 1, new Asset { AssetName = "02", AssetArea = "200m2", AssetAreaUse = "02", AssetNumberFloor = "200m2", AssetStructure = "02", AssetLevel = "200m2", AssetUse = "02", AssetUseTime = "200m2" } }
                    },
                Muc4 = new Dictionary<int, string>
                    {
                        { 0, "/img_re.png" }
                    }
            };

            Console.WriteLine("DataLand object initialized successfully!");
        }
    }
}
