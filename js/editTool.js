$(function () {
    var markupStr1 = $('#summernote1').summernote({
        toolbar:
            [
                ['fontsize', ['fontsize']],
                ['font', ['bold', 'italic', 'underline']],
                ['hr'],
                ['fontname', ['fontname']],
                ['forecolor'],
                ['para', ['ul', 'ol', 'paragraph', 'height']],
                ['clear', ['clear', 'undo' , 'redo']],

            ],

        height: 150,
        dialogsFade: true,
        focus: true,
        placeholder: "",
        fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '28','30','36', ],//字体大小配置
        focus: true,
        placeholder: "",
      });

    var markupStr2 = $('#summernote2').summernote({
        height: 300,
    tabsize: 2,
    airMode: true,
    popover: {
        air: [
            ['color', ['color']],
            ['font', ['bold', 'underline', 'clear']]
        ]
    },
        
    });
    

    var markupStr3 = $('#summernote3').summernote({
        height: 300,
    tabsize: 2,
    airMode: true,
    popover: {
        air: [
            ['color', ['color']],
            ['font', ['bold', 'underline', 'clear']]
        ]
    },
        
    });
    



})