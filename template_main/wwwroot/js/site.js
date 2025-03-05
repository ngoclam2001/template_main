// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    function load_data() {
        var data_land = {
            id: "AA 0987654",
            muc_1: {
                1: {
                    person_name: "Nguyễn Văn A",
                    person_cccd: "231414141"
                },
                2: {
                    person_name: "Nguyễn Văn B",
                    person_cccd: "231414142"
                },
                3: {
                    person_name: "Nguyễn Văn C",
                    person_cccd: "231414143"
                },
            },
            muc_2: {
                0: { is_check: false },
                1: {
                    land_number: "01",
                    land_map_number: "100m2",
                    land_area: "cac",
                    land_class: "abc",
                    land_use_date: "abc",
                    land_use: "abc",
                    land_address: "abc",
                    land_purpose: "abc"
                },
                2: {
                    land_number: "02",
                    land_map_number: "200m2",
                    land_area: "cac",
                    land_class: "abc",
                    land_use_date: "abc",
                    land_use: "abc",
                    land_address: "abc",
                    land_purpose: "abc"
                },
            },
            muc_3: {
                0: { is_check: false },
                1: {
                    asset_name: "01",
                    asset_area: "100m2",
                    asset_area_use: "01",
                    asset_number_floor: "100m2",
                    asset_structure: "01",
                    asset_level: "100m2",
                    asset_use: "01",
                    asset_use_time: "100m2"
                },
                2: {
                    asset_name: "02",
                    asset_area: "200m2",
                    asset_area_use: "02",
                    asset_number_floor: "200m2",
                    asset_structure: "02",
                    asset_level: "200m2",
                    asset_use: "02",
                    asset_use_time: "200m2"
                },
            },
            muc_4: {
                // image: "/page_print/img_re.png",
                0: "~/image/img_re.png",
            }

        };
        //load id
        $('.code_pdf').append(data_land.id);

        //load muc 1
        var phan_1 = '';
        for (const key in data_land.muc_1) {
            phan_1 += '<div class="person"><span class="person_name">' + data_land.muc_1[key].person_name + '</span>,<span class="person_cccd"> ' + data_land.muc_1[key].person_cccd + '</span></div>'
        }
        $(".list_person").html(phan_1);

        //load muc 2
        var phan_2 = '';
        var table = '<div class="first_land_info"><p>a. Thừa đất số: <span class="land_number_s">' + data_land.muc_2[1].land_number + '</span></p><p>b. Diện tích: <span class="land_area_s">' + data_land.muc_2[1].land_number + '</span></p></div><p>c. Địa chỉ: <span class="land_address_all">' + data_land.muc_2[1].land_number + '</span></p><p>d. Danh sách các thửa đất:</p>';
        table += '<table class="table_land"><tbody><tr><th><p>Tờ bản đồ số</p></th><th><p>Thửa đất số</p></th><th><p>Diện tích(m2)</p></th><th><p>Loại đất</p></th><th><p>Thời hạn sử dụng</p></th><th><p>Hình thức sử dụng</p> </th><th><p>Nguồn gốc sử dụng đất</p> </th><th><p>Địa chỉ</p> </th></tr>';
        for (const key in data_land.muc_2) {
            if (key != 0) {
                if (data_land.muc_2[0].is_check == false) {
                    $(".land_first_case").show();
                    $(".land_second_case").hide();
                    phan_2 += '<div class="first_land_info"><p>a. Thừa đất số: <span class="land_number">' + data_land.muc_2[key].land_number + '</span></p><p>tờ bản đồ số: <span class="land_map_number">' + data_land.muc_2[key].land_map_number + '</span></p></div><div class="first_land_info"><p>b. Diện tích: <span class="land_area">' + data_land.muc_2[key].land_area + '</span></p><p>c. Loại đất: <span class="land_class">' + data_land.muc_2[key].land_class + '</span></p></div><p>d. Thời hạn sử dụng: <span class="land_use-date">' + data_land.muc_2[key].land_use_date + '</span></p><p>đ. Hình thức sử dụng: <span class="land_use">' + data_land.muc_2[key].land_use + '</span></p><p>e. Địa chỉ: <span class="land_address">' + data_land.muc_2[key].land_address + '</span></p><p>g. Nguồn gốc sử dụng đất: <span class="land_purpose">' + data_land.muc_2[key].land_purpose + '</span></p>'
                }
                else {
                    $(".land_first_case").hide();
                    $(".land_second_case").show();
                    phan_2 += '<tr><td><p>' + data_land.muc_2[key].land_number + '</p></td><td><p>' + data_land.muc_2[key].land_map_number + '</p></td><td><p>' + data_land.muc_2[key].land_area + '</p></td><td><p>' + data_land.muc_2[key].land_class + '</p></td><td><p>' + data_land.muc_2[key].land_use_date + '</p></td><td><p>' + data_land.muc_2[key].land_use + '</p></td><td><p>' + data_land.muc_2[key].land_purpose + '</p></td><td><p>' + data_land.muc_2[key].land_address + '</p></td></tr>'
                }
            }
        }
        if (data_land.muc_2[0].is_check == false) {
            $(".land_first_case").append(phan_2);
        } else {
            $(".land_second_case").append(table + phan_2 + "</tbody></table>");
        }

        //load muc 3
        var phan_3 = '';
        var phan_3_c = '<div class="first_land_info"><p>a. Tên tài sản: <span class="asset_name">' + data_land.muc_3[2].asset_area + '</span></p><p>b. Diện tích xây dựng: <span class="asset_build">' + data_land.muc_3[2].asset_area + '</span></p></div><div class="first_land_info"><p>c. Diện tích sử dụng: <span class="asset_use">' + data_land.muc_3[2].asset_area + '</span></p><p>d. Số tầng: <span class="asset_floor">' + data_land.muc_3[2].asset_area + '</span></p></div><div class="first_land_info"><p>đ. Kết cấu: <span class="asset_structre">' + data_land.muc_3[2].asset_area + '</span></p><p>e. Cấp công trình: <span class="asset_level">' + data_land.muc_3[2].asset_area + '</span></p></div><div class="first_land_info"><p>g. Hình thức sử dụng: <span class="asset_use">' + data_land.muc_3[2].asset_area + '</span></p><p>h. Thời hạn sử dụng: <span class="asset_use">' + data_land.muc_3[2].asset_area + '</span></p></div><p>i. Địa chỉ: <span class="asset_address">' + data_land.muc_3[2].asset_area + '</span></p>';
        $('.land_info_asset').append(phan_3_c);
        for (const key in data_land.muc_3) {
            if (key != 0) {
                if (data_land.muc_3[0].is_check == true) {
                    $(".table_asset_first").show();
                    $(".table_asset_second").hide();
                    phan_3 += '<tr><td><p>' + data_land.muc_3[key].asset_name + '</p></td><td><p>' + data_land.muc_3[key].asset_area + '</p></td><td><p>' + data_land.muc_3[key].asset_area_use + '</p></td><td><p>' + data_land.muc_3[key].asset_number_floor + '</p></td><td><p>' + data_land.muc_3[key].asset_structure + '</p></td><td><p>' + data_land.muc_3[key].asset_level + '</p></td></tr>'
                    $(".table_asset_first").append(phan_3);
                }
                else {
                    $(".table_asset_first").hide();
                    $(".table_asset_second").show();
                    phan_3 += '<tr><td><p>' + data_land.muc_3[key].asset_name + '</p></td><td><p>' + data_land.muc_3[key].asset_area + '</p></td><td><p>' + data_land.muc_3[key].asset_area_use + '</p></td><td><p>' + data_land.muc_3[key].asset_number_floor + '</p></td><td><p>' + data_land.muc_3[key].asset_use + '</p></td></tr>'
                    $(".table_asset_second").append(phan_3);
                }
            }
        }

        //load muc 4
        var phan_4 = '';
        for (const key in data_land.muc_4) {
            phan_4 += '<img src="' + data_land.muc_4[key] + '" alt="">';
        }
        $(".image_land").html(phan_4);
    }

    $(document).on('click', '.btn_print', function (event) {
        event.preventDefault();
        var element = document.getElementById('main_content');

        //easy
        //html2pdf().from(element).save();

        //custom file name
        // html2pdf().set({filename: 'mau_giay'+js.AutoCode()+'.pdf'}).from(element).save();

        //more custom settings
        var opt =
        {
            margin: 1,
            filename: 'mau_giay' + js.AutoCode() + '.pdf',
            image: { type: 'png/jpg/jpeg', quality: 0.98 },
            pagebreak: { mode: 'css', before: '#page2el' },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        // New Promise-based usage:
        html2pdf().set(opt).from(element).save();
    });

    load_data();
})
