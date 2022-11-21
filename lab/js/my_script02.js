        var p;
        function init() {
            p = document.getElementById("msg");
            p.onmouseover = over;
            p.onmouseout = out;
        }
        function over() {
            p.style.backgroundColor = "orchid";
        }
        function out() {
            p.style.backgroundColor = "white";
        }