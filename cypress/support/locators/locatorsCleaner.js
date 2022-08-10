const locators = {
    add_absence: {
        reason: '.c-radio__label',
        save: '[data-cy="c-btn"] > span',
        notification: '.c-notification__content',
    },

    availability: {
        btn_availability: '.c-workload__edit',
        distance: '.c-slider__handle',
        hours: '.c-slider__handle',
        rate: '.c-numeric-input__button ',
        blockers: '.c-checkbox__label',
        save: '[name=submit]',
        btn_availability2: '[data-cy="c-worker-preferences-editable__button"]',
        notification: '.c-notification__content',

    },

    intake: {
        intake_page: 'https://mijn-homeworks.ict-works.info/intake/worker/step1',
        zipcode: '[name="postcode"]',
        house_number: '[name="houseNumber"]',
        ducth_language: '.c-checkbox__label',
        last_question: '.c-checkbox__box',
        save: '[data-cy="c-btn"]',
        message: '[name="note"]',
        first_name: '[name="firstName"]',
        last_name: '[name="lastName"]',
        email: '[name="email"]',
        phone: '[name="phone"]',
        password: '[name="password"]',
        password_confirmation: '[name="passwordConfirmation"]',

    },

    invitations: {
        btn_invitations: '.c-vertical-nav__item',
        view_invitation: '[data-cy="cy-invitation-view"]',
        accept_invitation: '.c-btn.c-invitation__choose',
        btn_date: '[data-cy="c-datepicker__input"]',
        day: '.c-dropdown__overlay',
        time: ':nth-child(6) > .c-modal > .c-modal__close > svg',
        cancel: '.c-modal__close',
    },

    savings_settings: {
        btn_settings: '.c-vertical-nav__item',
        btn_saving_settings: '[data-cy="savings-link"]',
        reason: '.c-checkbox__box',
        amount_plus: '.c-numeric-input__button.c-numeric-input__plus',
        amount_minus: '.c-numeric-input__button.c-numeric-input__minus',
        save: '[data-cy="c-btn"]',
        notification: '.c-notification__content',
    },

    payment_method: {
        btn_payment_method: '[data-cy="c-billing-editable__button"] > svg',
        bank_account: '.c-input',
        save: '[data-cy="c-btn"]',
    },

}

export default locators