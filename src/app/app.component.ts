import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Row} from './row';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  headers = ['A', 'B', 'C', 'D', 'E'];
  searchText = '';
  // @ts-ignore
  @ViewChild('f') adjustmentForm: NgForm;
  multiplier = 0;
  rawData: Row[] = [
    {
      'A': 'Avengers: Infinity War',
      'B': 94,
      'C': 63,
      'D': 38,
      'E': 0.46
    },
    {
      'A': 'Captain America: Civil War',
      'B': 93,
      'C': 37,
      'D': 78,
      'E': 0.95
    },
    {
      'A': 'The Avengers Assemble',
      'B': 91,
      'C': 91,
      'D': 81,
      'E': 0.65
    },
    {
      'A': 'Guardians of the Galaxy',
      'B': 90,
      'C': 12,
      'D': 58,
      'E': 0.77
    },
    {
      'A': 'Captain America: The Winter Soldier',
      'B': 88,
      'C': 93,
      'D': 81,
      'E': 0.95
    },
    {
      'A': 'Iron Man',
      'B': 88,
      'C': 95,
      'D': 52,
      'E': 0.04
    },
    {
      'A': 'Black Panther',
      'B': 88,
      'C': 75,
      'D': 104,
      'E': 0.1
    },
    {
      'A': 'Thor: Ragnarok',
      'B': 87,
      'C': 81,
      'D': 109,
      'E': 0.41
    },
    {
      'A': 'Iron Man 2',
      'B': 86,
      'C': 14,
      'D': 22,
      'E': 0.67
    },
    {
      'A': 'Guardians of the Galaxy Vol. 2',
      'B': 84,
      'C': 92,
      'D': 48,
      'E': 0.74
    },
    {
      'A': 'Iron Man 3',
      'B': 82,
      'C': 1,
      'D': 44,
      'E': 0.86
    },
    {
      'A': 'Spider Man: Homecoming',
      'B': 76,
      'C': 96,
      'D': 1,
      'E': 0.71
    },
    {
      'A': 'Avengers: Age of Ultron',
      'B': 75,
      'C': 71,
      'D': 24,
      'E': 0.05
    },
    {
      'A': 'Captain America: The First Avenger',
      'B': 74,
      'C': 56,
      'D': 68,
      'E': 0.01
    },
    {
      'A': 'Thor: The Dark World',
      'B': 73,
      'C': 63,
      'D': 41,
      'E': 0.11
    },
    {
      'A': 'Doctor Strange',
      'B': 73,
      'C': 92,
      'D': 108,
      'E': 0.15
    },
    {
      'A': 'Thor',
      'B': 70,
      'C': 81,
      'D': 70,
      'E': 0.2
    },
    {
      'A': 'Ant Man',
      'B': 68,
      'C': 92,
      'D': 82,
      'E': 0.48
    },
    {
      'A': 'The Incredible Hulk',
      'B': 50,
      'C': 29,
      'D': 65,
      'E': 0.85
    },
    {
      'A': 'Star Wars Episode V: The Empire Strikes Back',
      'B': 91,
      'C': 74,
      'D': 1,
      'E': 0.5
    },
    {
      'A': 'Rogue One: A Star Wars Story',
      'B': 90,
      'C': 62,
      'D': 103,
      'E': 0.56
    },
    {
      'A': 'Star Wars: VII - The Force Awakens',
      'B': 90,
      'C': 67,
      'D': 93,
      'E': 0.88
    },
    {
      'A': 'Star Wars IV: A New Hope',
      'B': 90,
      'C': 14,
      'D': 50,
      'E': 0.98
    },
    {
      'A': 'Star Wars Episode VI: Return of the Jedi',
      'B': 84,
      'C': 40,
      'D': 17,
      'E': 0.44
    },
    {
      'A': 'Star Wars Episode III: Revenge of the Sith',
      'B': 70,
      'C': 83,
      'D': 95,
      'E': 0.26
    },
    {
      'A': 'Star Wars: VIII - The Last Jedi',
      'B': 69,
      'C': 68,
      'D': 35,
      'E': 0.78
    },
    {
      'A': 'Star Wars Episode II: Attack of the Clones',
      'B': 59,
      'C': 14,
      'D': 101,
      'E': 0.47
    },
    {
      'A': 'Star Wars Episode I: The Phantom Menace',
      'B': 51,
      'C': 60,
      'D': 27,
      'E': 0.05
    },
    {
      'A': 'Pirates of the Caribbean: The Curse of the Black Pearl',
      'B': 76,
      'C': 16,
      'D': 41,
      'E': 0.33
    },
    {
      'A': 'Pirates of the Caribbean: Dead Man\\\'s Chest',
      'B': 82,
      'C': 39,
      'D': 90,
      'E': 0.16
    },
    {
      'A': 'Pirates of the Caribbean: At World\\\'s End',
      'B': 81,
      'C': 39,
      'D': 37,
      'E': 0.06
    },
    {
      'A': 'Pirates of the Caribbean: On Stranger Tides',
      'B': 80,
      'C': 42,
      'D': 65,
      'E': 0.25
    },
    {
      'A': 'Pirates of the Caribbean: Dead Men Tell No Tales',
      'B': 80,
      'C': 13,
      'D': 6,
      'E': 0.74
    },
    {
      'A': 'Harry Potter and the Goblet of Fire',
      'B': 89,
      'C': 74,
      'D': 88,
      'E': 0.13
    },
    {
      'A': 'Harry Potter and the Deathly Hallows Part 2',
      'B': 88,
      'C': 53,
      'D': 31,
      'E': 0.9
    },
    {
      'A': 'Harry Potter and the Deathly Hallows Part 1',
      'B': 86,
      'C': 97,
      'D': 86,
      'E': 0.93
    },
    {
      'A': 'Harry Potter and the Prisoner of Azkaban',
      'B': 85,
      'C': 60,
      'D': 109,
      'E': 0.88
    },
    {
      'A': 'Harry Potter and the Order of the Phoenix',
      'B': 84,
      'C': 21,
      'D': 5,
      'E': 0.03
    },
    {
      'A': 'Harry Potter and the Chamber of Secrets',
      'B': 83,
      'C': 78,
      'D': 11,
      'E': 0.83
    },
    {
      'A': 'Harry Potter and the Half-Blood Prince',
      'B': 80,
      'C': 45,
      'D': 98,
      'E': 0.03
    },
    {
      'A': 'Harry Potter and the Philosopher\\\'s Stone',
      'B': 80,
      'C': 96,
      'D': 1,
      'E': 0.77
    },
    {
      'A': 'Fantastic Beasts and Where To Find Them',
      'B': 77,
      'C': 87,
      'D': 95,
      'E': 1.0
    }
  ];
  rows: Row[] = [];

  ngOnInit() {
    this.populateRows();
  }

  private populateRows() {
    this.rows = this.rawData.map(function(row: Row) {
      return Object.assign(new Row(row.A, row.B, row.C, row.D, row.E), row);
    });
  }

  onSubmit()  {
    const multiplier = this.adjustmentForm.value.adjustment;
    this.rows = this.rawData.map(function(row: Row) {
      return Object.assign(new Row(row.A, row.B, row.C, (row.C * multiplier), row.E));
    });
  }

  onReset() {
    this.populateRows();
    this.adjustmentForm.resetForm();
  }
}
