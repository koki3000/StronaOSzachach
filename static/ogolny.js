let before = '';
function klikanie(e) {
    if (before === e.id){
        clean();
        before = '';
    } else {
        let funkcja = window[e.id];
        if (typeof funkcja === 'function'){
        funkcja();
        before = e.id;
        } 
    }
}

function clean(){
    document.querySelector('#ruchy').innerHTML = '';
    document.querySelector('#ruchy2').innerHTML = '';
}

function pion() {
    document.querySelector('#ruchy').innerHTML = '';
    document.querySelector('#ruchy2').innerHTML = '<div class="strona col-lg-9 col-sm-6"><h2>Pion</h2>' + 
    'Pion może ruszać się o jedno pole do przodu, wyjątkowo jeśli to jest pierwszy ruch danego piona może się poruszyć o 2 pola na przód.' + 
    'Pion jako jedyny ma inną mechanikę zbijania przeciwnych figur niż wzór ruchu, może tylko zbić na ukos do przodu.' + 
    'Na rysunku zaznaczony na żółto możliwy ruch, a na czerwono możliwe bicia.    </div>' + 
    '<div class="strona col-lg-3 col-sm-6"> <img src="/static/Pion.png" height="200"></div>';
}

function wieza() {
    document.querySelector('#ruchy').innerHTML = '';
    document.querySelector('#ruchy2').innerHTML = '<div class="strona col-lg-9 col-sm-6"><h2>Wieża</h2>' + 
    'Wieża porusza się o dowolną liczbę wolnych pól w poziomie i pionie; porusza się ona również podczas roszady.</div>' + 
    '<div class="strona col-sm-6 col-lg-3"> <img src="/static/Wieza.png" height="200"></div>';
}

function konik() {
    document.querySelector('#ruchy').innerHTML = '';
    document.querySelector('#ruchy2').innerHTML = '<div class="strona col-lg-9 col-sm-6"><h2>Skoczek</h2>' + 
    'Skoczek rusza się na najbliższe pole nie znajdujące się w tym samym rzędzie, kolumnie lub przekątnej; innymi słowy poruszają się one o dwa pola na kształt wieży,' + 
    'a następnie jedno pole prostopadle do tego kierunku. Ruch skoczka nie jest blokowany przez inne bierki, tzn. „skacze” on na nowe pole. Ruchy skoczka opisuje się' + 
    'także porównując je do litery „L” lub cyfry „7” (lub dowolnej odbitej, w poziomie i pionie, ich postaci), przy czym wykonuje on dwa kroki w danym kierunku, 90°' + 
    'zwrot w jednym z kierunków i krok w nowo wybranych kierunku.</div>' + 
    '<div class="strona col-lg-3 col-sm-6"> <img src="/static/Konik.png" height="200"></div>';
}

function goniec() {
    document.querySelector('#ruchy2').innerHTML = '';
    document.querySelector('#ruchy').innerHTML = '<div class="strona col-lg-9 col-sm-6"><h2>Goniec</h2>' + 
    'Goniec może ruszać się o dowolną liczbę wolnych pól po przekątnych.</div>' + 
    '<div class="strona col-lg-3 col-sm-6"> <img src="/static/Goniec.png" height="200"></div>';
}

function hetman() {
    document.querySelector('#ruchy2').innerHTML = '';
    document.querySelector('#ruchy').innerHTML = '<div class="strona col-lg-9 col-sm-6"><h2>Hetman</h2>' + 
    'Hetman porusza się o dowolną liczbę wolnych pól w poziomie, pionie i na ukos (łączy w ten sposób w sobie ruchy wieży i gońca).</div>' + 
    '<div class="strona col-lg-3 col-sm-6"> <img src="/static/Hetman.png" height="200"></div>';
    
}

function krol() {
    document.querySelector('#ruchy2').innerHTML = '';
    document.querySelector('#ruchy').innerHTML = '<div class="strona col-lg-9 col-sm-6"><h2>Król</h2>' + 
    'Król może ruszać się o jedno pole w poziomie, pionie lub na ukos. Najwyżej raz w grze każdy z króli może wykonać specjalny ruch zwany roszadą.</div>' + 
    '<div class="strona col-lg-3 col-sm-6"> <img src="/static/Krol.png" height="200"></div>';
    
}