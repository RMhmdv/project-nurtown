let phoneFields = document.querySelectorAll(".phoneInput")

let im = new Inputmask("+38 (099) 999 99 99");
im.mask(phoneFields);

function showNewModal() {
    let scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openNewModal"]').addEventListener('click', function () {
        document.body.style.overflow = 'hidden';
        document.querySelector('#openNewModal').style.marginLeft = scrollbar;
    });
}

new JustValidate('.js-form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
        },
        phone: {
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
        message: {
            required: true,
            minLength: 3,
        },
    },
    messages:{
        name: {
            minLength: 'Введите больше 1-го символа',
            required: 'Введите Ваше имя',
        },
        phone: {
            required: 'Введите Ваш номер телефона',
        },
        email: {
            email: 'У почты неправильный формат',
            required: 'Укажите Вашу почту ',
        },
        message: {
            required: 'Напишите Ваш вопрос',
            minLength: 'Нужно ввести больше символов',
        },
    },
    submitHandler: function (form) {
        let xhr = new XMLHttpRequest();

        xhr.open("POST", "../mail.php", true);

        let formData = new FormData(form);

        xhr.addEventListener("load", function () {
            if (xhr.readyState === 4) {
                switch (xhr.status) {
                    case 200:
                        showNewModal();
                        break;
                    case 404:
                        console.log("You are looser!");
                        break;
                    default:
                        console.log(":(");
                        break;
                }
            }
        });
        xhr.send(formData);
    },
});