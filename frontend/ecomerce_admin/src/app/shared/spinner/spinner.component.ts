import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.css"],
})
export class SpinnerComponent implements OnInit {
  @Input("loading") isLoading: boolean = false;

  constructor() {}

  ngOnInit() {}
}