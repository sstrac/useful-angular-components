import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'code-textarea',
  templateUrl: 'code-textarea.component.html',
  styleUrls: ['./code-textarea.component.scss']
})
export class CodeTextareaComponent implements OnInit{
  @Input() content: string[] | string
  @Input() codeStyle: string

  ngOnInit(){
    this.codeStyle = this.codeStyle.toLowerCase()
  }

  ngOnChanges(){
    if(typeof(this.content) == "string"){
      this.content = this.content.split(" ")
    }
  }

  applyCodestyle(word: string){
    switch(this.codeStyle){
      case 'sql': 
        return this.sqlCodeStyle(word)
      default:
    }
  }

  sqlCodeStyle(word: string){
    if(sqlKeywords.includes(word.toLowerCase())){
      return { blue: true }
    }
  }
}

const sqlKeywords = [ "select", "from", "where", "and" ]