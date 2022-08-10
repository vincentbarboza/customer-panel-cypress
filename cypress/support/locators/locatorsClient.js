const locators = {
    absence: {
        save: '[data-cy="c-btn"] > span',
        notification: '.c-notification__content',
    },

    hours: {
        btn_hours: '.c-vertical-nav__item',
        edit_hours: 'button.c-btn-text',
        hours_options: '.c-form__input > .c-dropdown',
        opotion_selected: '.c-combobox__option--selected',
        save: '[data-cy="c-btn"]',
        notification: '.c-notification__content',

    },

    intake: {
        intake_page: 'https://mijn-homeworks.ict-works.info/intake/client/step1',
        zipcode: '[name="postcode"]',
        house_number: '[name="houseNumber"]',
        last_question: '.c-checkbox__box',
        save: '[data-cy="c-btn"]',
        message: '[name="note"]',
        first_name: '[name="firstName"]',
        last_name: '[name="lastName"]',
        email: '[name="email"]',
        phone: '[name="phone"]',
        password: '[name="password"]',
        password_confirmation: '[name="passwordConfirmation"]',
        next_step: '[data-cy="c-btn"] > span',
        continue: '[data-cy="button-confirm"]',

    },

    invoices: {
        btn_invoices: '.c-vertical-nav__item',
        invoices_options: '.c-form__input > .c-dropdown',
        option_selected: '.c-combobox__option--selected',
        save: '[data-cy="c-btn"]',
        notification: '.c-notification__content',
    },

    insurance: {
        btn_insurance: '.c-checkbox__box',
    },

    payment_method: {
        btn_payment_method: '[data-cy="c-billing-editable__button"] > svg',
        aumotamitc_payment: '.c-radio__label',
        bank_account: '.c-input',
        ideal: '.c-radio__label',
        save: '[data-cy="c-btn"]',
    },

    requests: {
        btn_request: '.c-vertical-nav__item',
        new_request: '.c-wishes-list__new-request',
        zipcode: '[name="postcode"]',
        house_number: '[name="houseNumber"]',
        hours_plus: '.c-numeric-input__plus',
        hours_minus: '.c-numeric-input__minus',
        date_options: '[data-cy="starting-date"] > .c-dropdown',
        option_selected: '[data-cy="c-dropdown__options__wrapper"] > :nth-child(1)',
        frequency: '.c-radio__label',
        save: '[name=submit]',
        next: '[data-cy="c-btn"] > span',
        confirm: '[data-cy="button-confirm"]',
        text: '.c-textarea',
        confirm_appointment: '[data-cy="c-btn"]',
        dashboard: '[data-cy="to-dashboard-btn"]',
        close_request: '[data-cy="c-btn"]',
        notification: '.c-notification__content',

    },
    settings: {
        btn_settings: '.c-vertical-nav__item',
        language_options: '.c-combobox--wide',
        language_selected: '.c-combobox__option--selected',
        save: '[data-cy="c-btn"]',
        notification: '.c-notification__content',
    },

    workers: {
        btn_workers: '.c-vertical-nav__item',
        view_worker: '.c-connections__item',
    },
};

export default locators;
