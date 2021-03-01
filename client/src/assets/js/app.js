/*
 * Template Name: Unify - Responsive Bootstrap Template
 * Description: Business, Corporate, Portfolio, E-commerce and Blog Theme.
 * Version: 1.6
 * Author: @htmlstream
 * Website: http://htmlstream.com
*/
class App {
    initCounter () {
        jQuery('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }

}

export default new App();