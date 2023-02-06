export default {
    template:
    ` <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">Мои заказы</h1>
    </div>
        <main>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center bg-light">
            <h2 class="w-100">Заказ №1</h2>

            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Название товара</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">200р.<small class="text-muted fw-light"> &times; 2 шт.</small></h1>
                        <p>Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара</p>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Название товара</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">100р.<small class="text-muted fw-light"> &times; 1 шт.</small></h1>
                        <p>Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара</p>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Название товара</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">300р.<small class="text-muted fw-light"> &times; 3 шт.</small></h1>
                        <p>Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара</p>
                    </div>
                </div>
            </div>
            <h2 class="w-100">Итоговая стоимость: 600р.</h2>
        </div>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center bg-light">
            <h2 class="w-100">Заказ №2</h2>

            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Название товара</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">200р.<small class="text-muted fw-light"> &times; 2 шт.</small></h1>
                        <p>Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара</p>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Название товара</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">100р.<small class="text-muted fw-light"> &times; 1 шт.</small></h1>
                        <p>Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара</p>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Название товара</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">300р.<small class="text-muted fw-light"> &times; 3 шт.</small></h1>
                        <p>Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара</p>
                    </div>
                </div>
            </div>
            <h2 class="w-100">Итоговая стоимость: 600р.</h2>
        </div>

        <div class="row justify-content-center gap-1">
            <button @click.prevent="router.go(-1)" class="col-6 btn btn-lg btn-outline-info mb-3" type="button">Назад</button>
        </div>
    </main>`
}