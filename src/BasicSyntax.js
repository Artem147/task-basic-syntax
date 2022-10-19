export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    function return_arabic_number(rome_number) {
        switch (rome_number) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
        }
        return 0;
    }
    result += return_arabic_number(str.slice(-1));
    for (let i = str.length - 1; i > 0; i--) {
        let cur = return_arabic_number(str[i]);
        let prev = return_arabic_number(str[i - 1]);
        if (cur > prev) {
            result -= prev;
        } else {
            result += prev;
        }
    }

    return result;
}
