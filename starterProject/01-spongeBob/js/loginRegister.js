document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#loginForm");
    const registerForm = document.querySelector("#registerForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.querySelector("#loginEmail").value;
        const password = document.querySelector("#loginPassword").value;

        if (email !== null && password !== null) {
            window.location = "../html/homePage.html"
            loginForm.reset();
        } else {
            alert("输入错误");
        }
    });

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.querySelector("#registerName").value;
        const email = document.querySelector("#registerEmail").value;
        const password = document.querySelector("#registerPassword").value;
        const confirmPassword = document.querySelector("#registerConfirmPassword").value;
        const accord = document.querySelector("#registerAccord").checked;

        const nameError = document.querySelector("#nameError");
        const emailError = document.querySelector("#emailError");
        const passwordError = document.querySelector("#passwordError");
        const confirmPasswordError = document.querySelector("#confirmPasswordError");

        const nameRegex = /^[\u4E00-\u9FFF]+$/;
        const emailRegex = /^[1-9][0-9]{4,10}@qq.com$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10}$/;
        const confirmPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10}$/;

        let valid = true;

        // 验证姓名
        if (!nameRegex.test(name)) {
            nameError.textContent = "*请输入有效的汉字姓名";
            valid = false;
        } else {
            nameError.textContent = "";
        }

        // 验证邮箱
        if (!emailRegex.test(email)) {
            emailError.textContent = "*请输入有效的QQ邮箱";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        // 验证密码
        if (!passwordRegex.test(password)) {
            passwordError.textContent = "*请输入包含数字以及大小写字母的十位有效密码";
            valid = false;
        } else {
            passwordError.textContent = "";
        }

        // 验证确认密码
        if (!confirmPasswordRegex.test(confirmPassword)) {
            confirmPasswordError.textContent = "*请输入包含数字以及大小写字母的十位有效密码";
            valid = false;
        } else {
            confirmPasswordError.textContent = "";
        }

        // 验证密码相同
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = "*密码和确认密码不匹配";
            valid = false;
        }

        // 如果有错误，则显示错误信息
        if (valid && accord) {
            window.location = "../html/homePage.html"
            loginForm.reset();
        }

    });
});
