let count = 0;

const val = document.querySelector('#val');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const btnStyle = e.currentTarget.classList;
        if (btnStyle.contains("decrease"))
        {
            count--;
        }
        else if( btnStyle.contains("increase"))
        {
            count++;
        }
        else
        {
            count = 0;
        }
        val.textContent = count;
    });
});