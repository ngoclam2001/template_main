// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
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

})
