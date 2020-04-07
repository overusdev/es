'use strict';
export const constModule = () => {
    const settings = {
        a: 10,
        b: 15,
        c: 20
    };

    settings.a = 11; // теперь a === 11
    // settings = { a: 11 }; // Uncaught TypeError: Assignment to constant variable

    /* eslint-disable-next-line */
    console.log(settings);
};


/*

Попытка переопределить ссылку на объект

settings = { a: 11 }

вызовет исключение - Uncaught TypeError: Assignment to constant variable.

но, свойства объекта (ключи) можно изменять:

settings.a = 11; // теперь a === 11

*/
