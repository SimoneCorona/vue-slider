const app = new Vue (
    {
        el: '#root',
        data: {
            currentSlide : 0,
            states : [
                {
                    title : 'Svezia',
                    images : 'img/01.jpg',
                    text :   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    title : 'Svizzera',
                    images : 'img/02.jpg',
                    text :   'Lorem ipsum',
                },
                {
                    title : 'Gran Bretagna',
                    images : 'img/03.jpg',
                    text :     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    title : 'Germania',
                    images : 'img/04.jpg',
                    text :   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
                {
                    title : 'Paradise',
                    images : 'img/05.jpg',
                    text :   'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
            ]
        },
        methods : { 
            prevSlide: function() {

                    // se sono alla prima, mi posiziono sull'ultima
                    if (this.currentSlide == 0) {
                        this.currentSlide = this.states.length - 1; // ultima
                    } else {
                        this.currentSlide--; // precedente
                    }
                },
            nextSlide: function() {

                    // se sono all'ultima, mi posiziono sulla prima
                    if (this.currentSlide == this.states.length - 1) {
                        this.currentSlide = 0; // prima
                    } else {
                        this.currentSlide++; // successiva
                    }
                },
        }    
    }
);

// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce