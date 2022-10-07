//選擇縣市區套件
// $("#zipcode").twzipcode({
//     "zipcodeIntoDistrict": true,
//     "css": ["city form-control", "town form-control"],
//     "countyName": "city", // 指定城市 select name
//     "districtName": "town" // 指定地區 select name
//     });

/*
    {
        // 縣市
        'county': {
            'label'    : '初始化標題',   // (string) 預設 `縣市`
            'name'     : '表單名稱',     // (string) 預設 `county`
            'value'    : '預設值',       // (string)
            'css'      : 'CSS 樣式',     // (string)
            'hidden'   : '要隱藏的縣市', // (Array|string) 可使用陣列或 , 字串。例如 ['臺北市','新北市'] or '臺北市,新北市',
            'required' : true|false,     // 是否為表單必須
            // 事件
            'onSelect' : function (e) { // change 事件
                // HTMLSelectElement
                console(this.value);
            }
        },
        // 鄉鎮市區
        'district': {
            'label'    : '初始化標題',   // (string) 預設 `鄉鎮市區`
            'name'     : '表單名稱',     // (string) 預設 `district`
            'value'    : '預設值',       // (string)
            'css'      : 'CSS 樣式',     // (string)
            'hidden'   : '要隱藏的區域', // (Array|string) 可使用陣列或 , 字串。例如 ['信義區','三星鄉'] or '信義區,三星鄉',
            'required' : true|false,     // 是否為表單必須
            // 事件
            'onSelect' : function (e) { // change 事件
                // HTMLSelectElement
                console(this.value);
            }
        },
        // 郵遞區號
        'zipcode': {
            'name'       : 'zipcode',  // 表單名稱
            'value'      : '預設值',   // 預設值
            'css'        : '',         // 樣式名稱
            'hidden'     : true|false, // 隱藏
            // 以下為 input attributes
            'type'       : 'number',   // input type[text,number…]
            'min'        : 0,          // 只有 input=number 時有效
            'max'        : 0,          // 只有 input=number 時有效
            'step'       : 1,          // 只有 input=number 時有效
            'placeholder': '',
            'maxlength'  : 3,          // 只有 input=text 時有效
            'pattern'    : '\\d+',
            'readonly'   : true|false,
            'required'   : true|false,
            // 事件
            'onKeyUp'    : function (event, countyValue, districtValue) {
                // HTMLInputElement
                console(this.value);
            },
            'onFocus'    : function (event) {
                // HTMLInputElement
                console(this.value);
            },
            'onBlur'     : function (event) {
                // HTMLInputElement
                console(this.value);
            }
        },
        // 僅用於 `detect` 查詢使用
        'GMAP_KEY'  : 'Google Maps API Key',
        // 自動偵測位置
        'detect'    : true|false,
        // 是否將郵遞區號合併入鄉鎮市區清單？
        'combine'   : true|false,
        // 是否顯示離島（預設 Yes）
        'island'    : true|false,
        // 自訂郵遞區號 JSON
        'database'  : {}
    }
*/

//按下"送出"按鈕，跳轉頁面
// let submit = document.querySelector(".submit");

// submit.addEventListener("click", () => {
//     location = "./company_login.html";
// })