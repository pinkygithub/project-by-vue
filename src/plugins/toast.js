import '../../static/js/plugins/toastr/toastr.css';
import Toast from '../../static/js/plugins/toastr/toastr.min.js';

export default {
    install: function(vue) {
        "use strict";
        //Toast.options = {
        //    "closeButton": true,
        //    "debug": false,
        //    "progressBar": true,
        //    "positionClass": "toast-top-right",
        //    "onclick": null,
        //    "showDuration": "400",
        //    "hideDuration": "400",
        //    "timeOut": "7000",
        //    "extendedTimeOut": "1000",
        //    "showEasing": "swing",
        //    "hideEasing": "linear",
        //    "showMethod": "fadeIn",
        //    "hideMethod": "fadeOut"
        //}
        vue.prototype.$toast = Toast;
    }

}