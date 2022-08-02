const locators = {
    login: {
        visit: 'https://mijn-homeworks.ict-works.info/',
        btn_login: '#ember7',
        email: 'input.c-input:eq(0)',
        password: 'input.c-input:eq(1)',
        submit: '#ember12'
    },

    menu: {
        btn_menu: '.c-header__hamburger > svg'
    },

    logout: {
        btn_logout: 'button.c-vertical-nav__item'
    },

    profile_page: {
        btn_profile: '.c-vertical-nav__item'
    },
    disable_days_week: {
        btn_edit: '.c-availability__overview > .c-btn-text',
        checkbox_off: '.c-dynamic-list > .c-dynamic-list__item > .c-dynamic-list_remove-row-button',
        checkbox_on: '.c-modal__content .c-checkbox > .c-checkbox__box'


    },

    edit_days_week: {
        more_time: '.c-dynamic-list > .c-dynamic-list__footer > .c-dynamic-list__add-row-button',
        btn_time: '.c-form__input.c-autocomplete__field > .c-input',
        save: '.c-modal__buttons > .c-btn'

    },

    choose_language: {
        checkbox: '.c-checkbox__label'
    },

    choose_portugues: {
        other_language: '.c-language-selector > .c-btn-text',
        type_portuguese: '[name="languages"]',
        select: '.c-autocomplete__option'
    },

    last_question: {
        checkbox: '.c-form__input > .c-checkbox__container--horizontal > .c-checkbox'
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
        close_chat: '.c-modal__close > svg'

    }
}

export default locators