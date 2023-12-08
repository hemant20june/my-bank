import { Component, EventEmitter, OnInit, Output, ViewChildren } from '@angular/core';
import { Setting } from './models/setting';
import { Input } from '@angular/core';
import { FormGroup, FormControl, Form } from '@angular/forms';
import { CounterDirective } from './directives/timer.directive';
import { KeysPipe } from './pipes/keys.pipe';
import { FieldConfig } from '../interfaces/field.interface';

@Component({
  selector: 'textbox-otp',
  templateUrl: './input-otp.component.html',
  styleUrls: ['./input-otp.component.scss']
})
export class InputOtpComponent  implements OnInit{

  field: FieldConfig;
  group: FormGroup;

	setting:  Setting = {
		length: 4,
		timer: 0,
		timerType: 0
	};
	@Output() onValueChange = new EventEmitter<any>();

	@ViewChildren(CounterDirective) CounterDirective;

	otpForm: FormGroup;
	inputControls: FormControl[] = new Array(this.setting.length);
	componentKey = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);

  counter: number;

	constructor(private keysPipe: KeysPipe) {

	}

	public ngOnInit(): void {
    this.setting = this.field.otpConfig || this.setting;

		this.otpForm = new FormGroup({})
		for (let index = 0; index < this.setting.length; index++) {
			this.otpForm.addControl(this.getControlName(index), new FormControl())
		}
	}

	public ngAfterViewInit(): void {
		let containerItem = document.getElementById(`c_${this.componentKey}`);
		if (containerItem) {
			let ele: any = containerItem.getElementsByClassName('.otp-input')[0]
			if (ele && ele.focus) {
				ele.focus();
			}
		}
	}

	private getControlName(idx) {
    //return  this.field.name + idx
		return `ctrl_${idx}`;
	}

   getControl(item : any) : FormControl {
		return this.otpForm.controls[item] as FormControl;
	}


	isLeftArrow(e) {
		return this.isKeyCode(e, 37);
	}

	isRightArrow(e) {
		return this.isKeyCode(e, 39);
	}

	isBackspaceOrDelete(e) {
		return e.key === "Backspace" || e.key === "Delete" || this.isKeyCode(e, 8) || this.isKeyCode(e, 46);
	}

	isKeyCode(e, targetCode) {
		var key = e.keyCode || e.charCode;
		if(key == targetCode) { return true; }
		return false;
	}

	keyUp(e, inputIdx: number) {
		let nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
		let prevInputId = this.appendKey(`otp_${inputIdx - 1}`);
		if (this.isRightArrow(e)) {
			this.setSelected(nextInputId);
			return;
		}
		if (this.isLeftArrow(e)) {
			this.setSelected(prevInputId);
			return;
		}
		let isBackspace = this.isBackspaceOrDelete(e);
		if (isBackspace && !e.target.value) {
			this.setSelected(prevInputId);
			this.rebuildValue();
			return;
		}
		if (!e.target.value) {
			return;
		}
		if (this.isValidEntry(e)) {
			this.focusTo(nextInputId);
		}
		this.rebuildValue();
	}

	appendKey(id) {
		return `${id}_${this.componentKey}`;
	}

	setSelected(eleId) {
		this.focusTo(eleId);
		let ele: any = document.getElementById(eleId);
		if (ele && ele.setSelectionRange) {
			setTimeout(() => {
				ele.setSelectionRange(0, 1);
			}, 0);
		}
	}

	isValidEntry(e) {
		var inp = String.fromCharCode(e.keyCode);
		var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		return isMobile || /[a-zA-Z0-9-_]/.test(inp) || (this.setting.allowKeyCodes && this.setting.allowKeyCodes.includes(e.keyCode)) || (e.keyCode >= 96 && e.keyCode <= 105);
	}

	focusTo(eleId) {
		let ele: any = document.getElementById(eleId);
		if (ele) {
			ele.focus();
			ele.selectionStart = ele.selectionEnd = 100;
		}
	}

	rebuildValue() {
		let val = '';
		this.keysPipe.transform(this.otpForm.controls).forEach(k => {
			if (this.otpForm.controls[k].value) {
				val += this.otpForm.controls[k].value;
			}
		});

    console.log('OTP Value ' + val);




    this.field.value = val;
		this.onValueChange.emit(val);
	}

	public onCounterChange(e): void {
		this.counter = e;
		if(this.counter == 0) {
			this.onValueChange.emit(-1);
		}
	}

	ressendOtp(): void {
		this.CounterDirective.first.startTimer();
		this.onValueChange.emit(-2);
	}

	public formatSecsToMins(time) {
		// Hours, minutes and seconds
		var hrs = ~~(time / 3600);
		var mins = ~~((time % 3600) / 60);
		var secs = ~~time % 60;

		// Output like "1:01" or "4:03:59" or "123:03:59"
		var ret = "";
		if (hrs > 0) {
			ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
		}
		ret += "" + mins + ":" + (secs < 10 ? "0" : "");
		ret += "" + secs;
		return ret;
	}

  // public onInputChange(e) {
  //   console.log(e);
  //   if(e.length == this.setting.length) {
  //     // e will emit values entered as otp and,
  //     console.log('otp is', e);
  //   }else if(e == -1) {
  //     // if e == -1, timer has stopped
  //     console.log(e, 'resend button enables');
  //   }else if(e == -2) {
  //     // e == -2, button click handle
  //     console.log('resend otp');
  //   }
  // }
}
