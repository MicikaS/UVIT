[Vežbe](../../../README.md)

[Radni priručnik](../../README.md)

-----

# 10. Sedmica 10

## 10.1 Teme

- Poglavlje 7. Node.js i Express.js

   - Sekcija 1. Moduli
   
   - Sekcija 2. Kreiranje HTTP serverskih aplikacija
   
   - Sekcija 3. Obrađivanje HTTP zahteva radnim okvirom Express.js
   
## 10.2 Domaći zadaci

#### Zadatak 1

Napisati Node.js i Express.js serversku aplikaciju koja se podiže na portu 3000. Aplikacija sadrži četiri stranice kojima korisnik može da pristupi. Korisnik započinje svoj rad tako što otvara prvu stranicu.

1. Stranica `http://localhost:3000/prodavnica` sadrži prikaz artikala koje su dostupne u prodavnici. Artikli se čuvaju na serveru kao niz objekata. Svaki artikal predstavlja element tog niza (dakle, objekat) koji ima naredne informacije: 

   - identifikator (niska)
   - naziv (niska)
   - cena (broj)
   - broj artikala (broj)

Na klijentu se svaki artikal prikazuje kao grupišući element koji sadrži tabelu sa informacijama o tom artiklu (jedna kolona za naziv informacije, druga kolona za njihove vrednosti) i dugme, koje se nalazi ispod tabele, na kojem stoji tekst "Naruči proizvod". Artikli se ređaju jedan pored drugog sve dok ima mesta u redu (hint: postaviti svojstvo `display` na `inline-block`). 

Kada korisnik klikne na neko od dugmadi, aplikacija se prebacuje na 2. stranicu. Prilikom prebacivanja na tu stranicu, proslediti identifikator artikla korišćenjem `GET` zahteva.

{:start="2"}
2. Stranici `http://localhost:3000/artikal/porudzbina` se pristupa jedino preko 1. stranice na način koji je opisan iznad. U slučaju da korisnik nije prosledio identifikator proizvoda (na primer, ako je ručno ukucao URL ove stranice u adresnu liniju veb pregledača), na stranici prikazati poruku o grešci i postaviti vezu ka 1. stranici. U suprotnom, stranica treba da sadrži formular koji korisnik popunjava za naručivanje artikla koji je odabrao na 1. stranici. Formular sadrži:

   - Polje u kojem je upisan identifikator proizvoda. Ovo polje se automatski popunjava na osnovu podatka koji se prosleđuje ovoj stranici. Korisniku je onemogućeno da menja ovo polje. Obezbediti u validaciji formulara da ovo polje bude popunjeno.

   - Polje u kojem korisnik bira broj artikala koje želi da naruči. Obezbediti u validaciji formulara da ovo polje bude popunjeno i da je njegova vrednost strogo pozitivan celi broj.

   - Polje u kojem korisnik unosi ime i prezime. Obezbediti u validaciji formulara da ovo polje bude popunjeno i da se moze sastojati samo od malih slova, velikih slova i karaktera `-`. Takođe, ime i prezime moraju biti odvojeni tačno jednim karakterom razmaka (pretpostaviti da, ukoliko korisnik ima više imena ili više prezimena, ona su razdvojena karakterom `-`, na primer `Ana-Marija` ili `Ilić-Petrović`). 

   - Polje u kojem korisnik bira datum isporuke. Obezbediti u validaciji formulara da ovo polje bude popunjeno i da uneti datum mora biti 2 dana nakon tekućeg datuma (tekući datum je datum kada korisnik popunjava taj formular) ili kasnije.

Ukoliko u bilo kom trenutku prilikom validacije formulara dođe do greške, prikazati korisniku poruku u informacionom prozoru (`window.alert`) poruku o grešci i fokusirati polje koje je pogrešno. Takođe, sprečiti da bilo kakav zahtev bude poslat serveru u slučaju greške. Ukoliko su svi podaci uspešno validirani, podaci iz formulara se prosleđuju na 3. stranicu metodom `POST`.

{:start="3"}
3. Stranici `http://localhost:3000/artikal/narucivanje` se pristupa jedino preko 2. stranice na način koji je opisan iznad. U slučaju da korisnik nije prosledio identifikator proizvoda (na primer, ako je ručno ukucao URL ove stranice u adresnu liniju veb pregledača), na stranici prikazati poruku o grešci i postaviti vezu ka 1. stranici. U suprotnom, serverska aplikacija prikuplja prosleđene informacije i redom:

   - Proverava da li u nizu artikala, za artikal čiji je identifikator prosleđen postoji dovoljno količine (broja artikala) da bi naručivanje bilo uspešno. Ukoliko ne postoji, prikazuje se stranica sa informacijama o grešci. Na toj stranici takođe postoji veza ka početnoj stranici.

   - Ukoliko ima dovoljno artikala, ažurira informaciju o datom artiklu tako što se količina umanjuje za onoliko koliko je korisnik naručio u formularu.

   - Nakon toga, u niz koji se čuva na serveru i koji sadrži informacije o svim porudžbinama, dodaje novu porudžbinu na osnovu podataka koje je korisnik uneo na prethodnoj stranici. Svaka porudžbina predstavlja objekat koji ima naredne informacije: 

      - identifikator artikla (niska)
      - ime i prezime korisnika (niska)
      - broj artikala (broj)
      - datum naručivanja (datum) - ova vrednost se automatski generiše na serveru u trenutku kreiranja nove porudžbine
      - datum isporuke (datum)

   - Prikazuje stranicu sa informacijama o uspešnosti naručivanja. Nakon 10 sekundi, na klijentskoj strani se vrši redirekcija na početnu stranicu (ovo je moguće izvesti na klijentu tako što se pregazi svojstvo `document.location` na URL adresu, zadatu niskom, na koju se vrši redirekcija, na primer: `document.location = 'http://matfuvit.github.io/UVIT';`).

Sve što nije eksplicitno navedeno u tekstu zadatka je otvoreno za interpretaciju (na primer, da li se poruka prikazuje kao naslov ili paragraf, da li je poravnanje teksta levo, desno ili centrirano, itd.).

-----

[Radni priručnik](../../README.md)

[Vežbe](../../../README.md)
