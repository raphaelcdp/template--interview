export class Watch {
	addedHours: number;
	addedMinutes: number;
	isLightOn: boolean;
  modificationModeEnum : ModificationModeEnum;

// Constructor	
  constructor() {
  this.addedHours = 0;
  this.addedMinutes = 0;
	this.isLightOn = false;
  this.modificationModeEnum = ModificationModeEnum.NONE;
  }


/*------- Time return functions --------*/
  
  // get default time
  getTime() {
	  var date = new Date();
	  return [date.getHours(), date.getMinutes(), date.getSeconds()].map(elt => elt < 10 ? "0"+elt : elt);
  }
  
  //get computed time with added hours and minutes with the "Mode" button
  getComputedTime() {
	  var date = new Date();
    var computedDate = new Date(date.getTime() + (this.addedHours*(60) + this.addedMinutes)*60000 );
    return [computedDate.getHours(), computedDate.getMinutes(), computedDate.getSeconds()].map(elt => elt < 10 ? "0"+elt : elt);
  }
  
/*------- Mode button functions --------*/
  
  // Change  between mode types
  changeMode() {
    switch(this.modificationModeEnum) {
      case ModificationModeEnum.HOURS :
        this.modificationModeEnum = ModificationModeEnum.MINUTES;
        break;
      case ModificationModeEnum.MINUTES : 
        this.modificationModeEnum = ModificationModeEnum.NONE;
        break;
      case ModificationModeEnum.NONE : 
        this.modificationModeEnum = ModificationModeEnum.HOURS;
        break;
      default :
        this.modificationModeEnum = ModificationModeEnum.NONE;
        break;
    }
  }

  // Add an hour
  incrementTime() {
    switch(this.modificationModeEnum) {
      case ModificationModeEnum.HOURS :
        this.addedHours++;
        break;
      case ModificationModeEnum.MINUTES : 
        this.addedMinutes++;
        break;
      case ModificationModeEnum.NONE : 
        break;
      default :
        break;
    }
  }

  getModificationModeEnum() {
    return this.modificationModeEnum;
  }
  
/*------- Light --------*/
  // Getter of boolean isLightOn
  getIsLightOn() : boolean {
	return this.isLightOn;
  }
  
  //Switch between light on/off
  switchLight() {
	this.isLightOn = this.isLightOn?false:true;
  }
  
}
