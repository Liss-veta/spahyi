export default {
  template: ` <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">Регистрация</h1>
    </div>
        <main>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
            <div class="col">
                <div class="row">
                    <form @submit.prevent="createUser">
                        <h1 class="h3 mb-3 fw-normal">Пожалуйста заполните все поля</h1>
                        <div class="form-floating mb-3">
                            <input v-model="user.fio" type="text" class="form-control" id="floatingFio" placeholder="ФИО">
                            <label for="floatingFio">ФИО</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="user.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="user.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Password</label>
                        </div>

                        <button  class="w-100 btn btn-lg btn-primary mb-3" type="submit">Зарегистрироваться</button>
                        <button @click.prevent="router.go(-1)" class="w-100 btn btn-lg btn-outline-info" type="submit">Назад</button>
                    </form>
                </div>

            </div>
        </div>
    </main>`,
  data() {
    return {
      user: {
        fio: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async createUser() {
        console.log(this.user);
      let response = await fetch("http://127.0.0.1:8000/api-samohod/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(this.user),
      }).then(
        response => response.json()
        
      )
      localStorage.setItem("user_token", response.content.user_token)
    //   let result = await response.content();
      return this.$router.push('/');
    },
  },
};
