import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  jokes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>("https://v2.jokeapi.dev/joke/Programming?type=single&amount=10").subscribe(
      response => {
        if (response.jokes) {
          console.log(response.jokes);
          this.jokes = response.jokes;
        } else if (response.joke) {
          console.log(response.joke);
          this.jokes = [response.joke];
        }
      })
  }
}



    // jokes: any[] = [
    //         {
    //           "error": false,
    //           "amount": 10,
    //           "jokes": [
    //               {
    //                   "category": "Programming",
    //                   "type": "single",
    //                   "joke": "If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.",
    //                   "flags": {
    //                       "nsfw": false,
    //                       "religious": false,
    //                       "political": false,
    //                       "racist": false,
    //                       "sexist": false,
    //                       "explicit": false
    //                   },
    //                   "id": 22,
    //                   "safe": true,
    //                   "lang": "en"
    //               },
    //               {
    //                   "category": "Programming",
    //                   "type": "single",
    //                   "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
    //                   "flags": {
    //                       "nsfw": false,
    //                       "religious": false,
    //                       "political": false,
    //                       "racist": false,
    //                       "sexist": false,
    //                       "explicit": false
    //                   },
    //                   "id": 23,
    //                   "safe": true,
    //                   "lang": "en"
    //               },
    //               {
    //                   "category": "Programming",
    //                   "type": "single",
    //                   "joke": "UDP is better in the COVID era since it avoids unnecessary handshakes.",
    //                   "flags": {
    //                       "nsfw": false,
    //                       "religious": false,
    //                       "political": false,
    //                       "racist": false,
    //                       "sexist": false,
    //                       "explicit": false
    //                   },
    //                   "id": 259,
    //                   "safe": true,
    //                   "lang": "en"
    //               },
    //               {
    //                   "category": "Programming",
    //                   "type": "single",
    //                   "joke": "A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks \"may I join you?\"",
    //                   "flags": {
    //                       "nsfw": false,
    //                       "religious": false,
    //                       "political": false,
    //                       "racist": false,
    //                       "sexist": false,
    //                       "explicit": false
    //                   },
    //                   "id": 5,
    //                   "safe": true,
    //                   "lang": "en"
    //               },
    //               {
    //                   "category": "Programming",
    //                   "type": "single",
    //                   "joke": "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
    //                   "flags": {
    //                       "nsfw": false,
    //                       "religious": false,
    //                       "political": false,
    //                       "racist": false,
    //                       "sexist": false,
    //                       "explicit": false
    //                   },
    //                   "id": 37,
    //                   "safe": true,
    //                   "lang": "en"
    //               },
    //               {
    //                   "category": "Programming",
    //                   "type": "single",
    //                   "joke": "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
    //                   "flags": {
    //                       "nsfw": false,
    //                       "religious": false,
    //                       "political": false,
    //                       "racist": false,
    //                       "sexist": false,
    //                       "explicit": false
    //                   },
    //                   "id": 41,
    //                   "safe": true,
    //                   "lang": "en"
    //               },
    //               {
    //                   "category": "Programming",
    //                   "type": "single",
    //                   "joke": "Debugging: Removing the needles from the haystack.",
    //                   "flags": {
    //                       "nsfw": false,
    //                       "religious": false,
    //                       "political": false,
    //                       "racist": false,
    //                       "sexist": false,
    //                       "explicit": false
    //                   },
    //                   "id": 40,
    //                   "safe": true,
    //                   "lang": "en"
    //               },
    //               {
    //                   "category": "Programming",
    //                   "type": "single",
    //                   "joke": "How do you tell HTML from HTML5?\n- Try it out in Internet Explorer\n- Did it work?\n- No?\n- It's HTML5.",
    //                   "flags": {
    //                       "nsfw": false,
    //                       "religious": false,
    //                       "political": false,
    //                       "racist": false,
    //                       "sexist": false,
    //                       "explicit": false
    //                   },
    //                   "id": 43,
    //                   "safe": true,
    //                   "lang": "en"
    //               },
    //               {
    //                   "category": "Programming",
    //                   "type": "single",
    //                   "joke": "Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender.",
    //                   "flags": {
    //                       "nsfw": true,
    //                       "religious": false,
    //                       "political": false,
    //                       "racist": false,
    //                       "sexist": false,
    //                       "explicit": true
    //                   },
    //                   "id": 30,
    //                   "safe": false,
    //                   "lang": "en"
    //               },
    //               {
    //                   "category": "Programming",
    //                   "type": "single",
    //                   "joke": "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says \"Can't you see the warning on the cigarette pack? Smoking is hazardous to your health!\" to which the man replies, \"I am a programmer.  We don't worry about warnings; we only worry about errors.\"",
    //                   "flags": {
    //                       "nsfw": false,
    //                       "religious": false,
    //                       "political": false,
    //                       "racist": false,
    //                       "sexist": false,
    //                       "explicit": false
    //                   },
    //                   "id": 38,
    //                   "safe": true,
    //                   "lang": "en"
    //               }
    //           ]
    //       }
    //       ]
