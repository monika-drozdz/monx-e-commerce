
import candle from "../../assets/can6.jpg";
import bathBombs from "../../assets/bomba.jpg";
import tabliczka from "../../assets/tab2.jpg";
import salt from "../../assets/salt-sloik.jpg";

const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            title: "Naturalne świece sojowe",
            imageUrl: `${candle}`, 
            linkUrl: 'shop/candles',
            description: "nasze świece są odlewane z naturalnego wosku sojowego w połączeniu z olejkami eterycznymi. Świece sojowe sa znakomitą alternatywą dla świec parafinowych, które są wytwarzane z ciężkich frakcji ropy naftowej i przy spalaniu wydzielają szkodliwe dla zdrowia związki chemiczne (m.in. benzen i toluen). Świece sojowe nie zawierają tych związków. Poprzez niższą temperaturę topnienia świece sojowe palą  się dłużej, są wydajniejsze, dają delikatniejszy płomień i wydzielają subtelny, niedrażniący zapach pochodzący z naturalnych olejków.",
        },
        {
            id: 2,
            title: "Musujące kule do kąpieli",
            imageUrl: `${bathBombs}`, 
            linkUrl: 'shop/bathbombs',
            description: "nasze musujące kule do kąpieli nie zawierają sztucznych barwników, barwę uzyskujemy poprzez dodanie naturalnych glinek kosmetycznych czy węgla akywnego, które mają dobroczynne działanie na naszą skórę.  Dodatek olejów kokosowego czy makadamia nawilży skórę, a olejki eteryczne zadziałają aromateraupetycznie.",
        },
        {
            id: 3,
            title: "Nawilżająca sól do kapieli",
            imageUrl: `${salt}`, 
            linkUrl: 'shop/salts',
            description: "nasze sole to połączenie różowej soli himalajskiej z solą z Morza Martwego z dodatkami suszonych kwiatowych płatków oraz naturalnych olejków eterycznych. W skład soli wchodzą również nawilżające oleje.",
        },
      
        {
            id: 4,
            title: "Pachnące tabliczki woskowe",
            imageUrl: `${tabliczka}`, 
            linkUrl: 'shop/zapachy',
            description: "tabliczki zapachowe zostały stworzone po to, by cieszyć oko i zniewalać zapachem. Stworzone z naturalnego wosku sojowego w połączeniu z masłem shea oraz olejkami eterycznymi nadadzą twojej  szafie lub przestrzeni przyjemny świeży kwiatowy zapach a dekoracja  z suszu kwiatowego ozdobi wnętrze.",
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
        return state;
    }
}

export default directoryReducer;