const locators = {
    login: {
        visit: 'https://mijn-homeworks.ict-works.info/',
        btn_login: '#ember7',
        email: 'input.c-input:eq(0)',
        password: 'input.c-input:eq(1)',
        submit: '#ember12',
    },

    menu: {
        btn_menu: '.c-header__hamburger > svg',
    },

    logout: {
        btn_logout: 'button.c-vertical-nav__item',
    },

    profile_page: {
        btn_profile: '.c-vertical-nav__item'
    },
    disable_days_week: {
        btn_edit: '.c-availability__overview > .c-btn-text',
        checkbox_off: '.c-dynamic-list > .c-dynamic-list__item > .c-dynamic-list_remove-row-button',
        checkbox_on: '.c-modal__content .c-checkbox > .c-checkbox__box',


    },

    edit_days_week: {
        more_time: '.c-dynamic-list > .c-dynamic-list__footer > .c-dynamic-list__add-row-button',
        btn_time: '.c-form__input.c-autocomplete__field > .c-input',
        save: '.c-modal__buttons > .c-btn',

    },

    choose_language: {
        checkbox: '.c-checkbox__label'
    },

    choose_portugues: {
        other_language: '.c-language-selector > .c-btn-text',
        type_portuguese: '[name="languages"]',
        select: '.c-autocomplete__option',
    },

    last_question: {
        checkbox: '.c-form__input > .c-checkbox__container--horizontal > .c-checkbox',
    },

    appointments: {
        btn_appointments: '.c-vertical-nav__item',
        btn_schedule: '[data-cy="schedule-btn"]',
        btn_day: '.fc-timeGridDay-button',
        btn_week: '.fc-timeGridWeek-button',
        btn_month: '.fc-dayGridMonth-button',
        drop_down: '.c-dropdown:eq(1)',
        show_info: '[data-cy="c-dropdown__options__wrapper"] > .c-context-menu__nav > a.c-vertical-nav__item',
        change_score: 'button.c-btn-text.c-vertical-nav__item',
        review: '.c-dropdown',
        five_stars: '[data-cy="c-dropdown__options__wrapper"] > .c-combobox__option',
        text_area: '.c-textarea',
        save_review: '[data-cy="c-btn"]',
        confirm_review: '[data-cy="button-confirm"]',
        start_chat: '.c-btn',
        message_chat: '[name="Message"]',
        send_message: '.c-chat__form > .c-btn',
        chat_options: '.c-collapsible__icon',
        state_notifications: '[data-cy="c-btn"] > span',
        report_chat: '[data-cy="c-btn"] > span',
        close_chat: '.c-modal__close > svg',

    },

    personal_details: {
        photo: '.c-photo-upload__button > span',
        btn_details: '[data-cy="c-personal-data-editable__button"] > svg',
        first_name: '[data-cy="c-first-name__input"]',
        middle_name: '[data-cy="c-middle-name__input"]',
        last_name: '[data-cy="c-last-name__input"]',
        gender: '.c-radio__label',
        date_of_birth: '[name="dateOfBirth"]',
        save: '[data-cy="c-btn"]',
    },

    adresses: {
        primary_adresses: '[data-cy="c-address-editable__button"] > svg',
        billing_adresses: '[data-cy="c-address-billing-editable__button"] > svg',
        street: '[name="street"]',
        house_number: '[name="housenumber"]',
        zipcode: '[name="zipcode"]',
        city: '[name="city"]',
        country: '.c-country__value',
        choose_country: {
            btn: '.c-country__name',
            netherlands: 'Netherlands'
        },
        save: '[data-cy="c-btn"]',
    },

    phone_numbers: {
        btn_phone_numbers: '[data-cy="c-phone-editable__button"] > svg',
        country_code: '.c-country-code__chevron',
        code_netherlands: '[alt="Netherlands"]',
        phone_number: '[placeholder="Phone number"]',
        save: '[data-cy="c-btn"]',
    },

    comunication_preferences: {
        btn_comunic_preferences: '[data-cy="c-communication-editable__button"] > svg',
        personal_contact: 'span.c-radio__label',
        email: 'span.c-radio__label',
        save: '[data-cy="c-btn"]'
    },

    notifications: {
        btn_notifications: '.c-context-menu__toggle',
        click_notification: '.c-notification__text',
    },

    email_addresses: {
        btn_email_adresses: '[data-cy="c-email-editable__button"] > svg',
        primary_email: '[name="primaryEmail"]',
        billing_email: '[name="billingEmail"]',
        save: '[data-cy="c-btn"]',
    },

    add_absence: {
        btn_absence: '[data-cy="add-absence-btn"]',
        btn_date: '[data-cy="c-datepicker__input"]',
        fn_period: date => `.DayPicker-Week > [aria-label="${date}"]`,
        time: '.c-input.c-input--with-icon',
        time_option: '.c-autocomplete__option',
    },

}

export default locators