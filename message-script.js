///////////////////////////////////////////////////////////////////////////////

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    
let specificLocation='';
let barCode='';
let sampleCollectedBy='';
let formCompletedBy='';
//speed in miliseconds
let speed='';

let occupation_Scrolldown='';
let occupation='';
let typeOfSpecimen='';

let locationSC_Scrolldown='';
let locationSC='';

///// setting defaults to the below values if not specified
chrome.storage.sync.get({
    specificLocation_Storage_API:'Unknown',
    barcode_Storage_API:'',
    sampleCollectedBy_Storage_API:'Unknown',
    formCompletedBy_Storage_API:'Unknown',
    speed_Storage_API:'150',
    occupation_Scrolldown_Storage_API:'750',
    occupation_Storage_API:'8',
    typeOfSpecimen_Storage_API:'3',
    locationSC_Scrolldown_Storage_API:'10',
    locationSC_Storage_API:'2'

},function(result){
    specificLocation=result.specificLocation_Storage_API;
    barCode=result.barcode_Storage_API;
    sampleCollectedBy=result.sampleCollectedBy_Storage_API;
    formCompletedBy=result.formCompletedBy_Storage_API;
    speed=result.speed_Storage_API;
    occupation_Scrolldown=result.occupation_Scrolldown_Storage_API;
    occupation=result.occupation_Storage_API;
    typeOfSpecimen=result.typeOfSpecimen_Storage_API;
    locationSC_Scrolldown=result.locationSC_Scrolldown_Storage_API;
    locationSC=result.locationSC_Storage_API;



});


let promise_1=new Promise(function(resolve,reject){setTimeout(()=>resolve(),0);});
promise_1
.then(function(){specificLocation_Element_Input(specificLocation);return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})
.then(function(){sampleCollectedBy_Element_Input(sampleCollectedBy);return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})
.then(function(){formCompletedBy_Element_Input(formCompletedBy);return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})

.then(function(){locationSC_Element_Dropdown();return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})
.then(function(){locationSC_Element_ScrollDown(locationSC_Scrolldown);return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})
.then(function(){locationSC_Element_Select(locationSC);return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})

.then(function(){radio_A_No_Element_Select();return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})
.then(function(){radio_B_No_Element_Select();return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})
.then(function(){radio_C_No_Element_Select();return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})

.then(function(){patient_Classification_Element_DropDown();return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})
.then(function(){patient_Classification_Element_Select();return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})

.then(function(){reason_Testing_Element_DropDown();return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})
.then(function(){reason_Testing_Select();return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})

.then(function(){typeOfSpecimen_DropDown();return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})
.then(function(){typeOfSpecimen_Element_Select(typeOfSpecimen);return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})

.then(function(){typeOfTest_DropDown();return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})
.then(function(){typeOfTest_Select();return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})


.then(function(){occupation_Element_DropDown();return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})
.then(function(){occupation_Element_ScrollDown(occupation_Scrolldown);return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})
.then(function(){occupation_Element_Select(occupation);return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})

.then(function(){barCode_Element_Input(barCode);return new Promise(function(resolve,reject){setTimeout(()=>resolve(),speed)});})

//.then(function(){;return new Promise(function(resolve,reject){setTimeout(()=>resolve(),t)});})

});

///////////////////////////////////////////////////////////////////////////

function specificLocation_Element_Input(specificLocation){
    let specificLocation_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(7) > td.absorbing-column > ng-form > div > div > div.hideInPrint > input");
    specificLocation_Element.attr("specificLocation_Element_Id","specificLocation_Element_Id");
    specificLocation_Element.val(specificLocation);

    let specificLocation_Element_InputEvent= new Event('input');
    let specificLocation_Element_ChangeEvent= new Event('change');
    document.querySelector('[specificLocation_Element_Id="specificLocation_Element_Id"]').dispatchEvent(specificLocation_Element_InputEvent);
    document.querySelector('[specificLocation_Element_Id="specificLocation_Element_Id"]').dispatchEvent(specificLocation_Element_ChangeEvent);
   
 
}  
function barCode_Element_Input(barCode){
    let barCode_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(18) > td.absorbing-column > ng-form > div > div > div.hideInPrint > input");
    barCode_Element.attr("barCode_Element_Id","barCode_Element_Id");
    barCode_Element.val(barCode);

    let barCode_Element_InputEvent=new Event('input');
    let barCode_Element_ChangeEvent=new Event('change');
    document.querySelector('[barCode_Element_Id="barCode_Element_Id"]').dispatchEvent(barCode_Element_InputEvent);
    document.querySelector('[barCode_Element_Id="barCode_Element_Id"]').dispatchEvent(barCode_Element_ChangeEvent);
    barCode_Element.focus();
}

function sampleCollectedBy_Element_Input(sampleCollectedBy){
    let sampleCollectedBy_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(26) > td.absorbing-column > ng-form > div > div > div.hideInPrint > input");
    sampleCollectedBy_Element.attr("sampleCollectedBy_Element_Id","sampleCollectedBy_Element_Id");
    sampleCollectedBy_Element.val(sampleCollectedBy);

    let sampleCollectedBy_Element_InputEvent=new Event('input');
    let sampleCollectedBy_Element_ChangeEvent=new Event('change');
    document.querySelector('[sampleCollectedBy_Element_Id="sampleCollectedBy_Element_Id"]').dispatchEvent(sampleCollectedBy_Element_InputEvent);
    document.querySelector('[sampleCollectedBy_Element_Id="sampleCollectedBy_Element_Id"]').dispatchEvent(sampleCollectedBy_Element_ChangeEvent);   
}

function formCompletedBy_Element_Input(formCompletedBy){
    let formCompletedBy_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(27) > td.absorbing-column > ng-form > div > div > div.hideInPrint > input");
    formCompletedBy_Element.attr("formCompletedBy_Element_Id","formCompletedBy_Element_Id");
    formCompletedBy_Element.val(formCompletedBy);

    let formCompletedBy_Element_InputEvent=new Event('input');
    let formCompletedBy_Element_ChangeEvent=new Event('change');
    document.querySelector('[formCompletedBy_Element_Id="formCompletedBy_Element_Id"]').dispatchEvent(formCompletedBy_Element_InputEvent);
    document.querySelector('[formCompletedBy_Element_Id="formCompletedBy_Element_Id"]').dispatchEvent(formCompletedBy_Element_ChangeEvent);  

}
/////////////////////////////////////////////////////////////////////////////////////////////////////

function occupation_Element_DropDown(){
    let occupation_Dropdown_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(1) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div > div.optionListInputText > span");
    occupation_Dropdown_Element.attr("occupation_Dropdown_Element_Id","occupation_Dropdown_Element_Id");
    let occupation_Dropdown_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[occupation_Dropdown_Element_Id="occupation_Dropdown_Element_Id"]').dispatchEvent(occupation_Dropdown_Element_Event);
}
function occupation_Element_ScrollDown(occupation_Scrolldown){
    let occupation_Scrolldown_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(1) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope");
    occupation_Scrolldown_Element.scrollTop(occupation_Scrolldown);
}
function occupation_Element_Select(occupation){ 
    let occupation_Element=$(`#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(1) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(${occupation})`);
    occupation_Element.attr("occupation_Element_Id","occupation_Element_Id");
    let occupation_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[occupation_Element_Id="occupation_Element_Id"]').dispatchEvent(occupation_Element_Event);   
}
/////////////////////location sc ///////////////
function locationSC_Element_Dropdown(){
    let locationSC_Dropdown_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(6) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div > div.optionListInputText > span");
    locationSC_Dropdown_Element.attr("locationSC_Dropdown_Element_Id","locationSC_Dropdown_Element_Id");
    let locationSC_Dropdown_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[locationSC_Dropdown_Element_Id="locationSC_Dropdown_Element_Id"]').dispatchEvent(locationSC_Dropdown_Element_Event);
}

function locationSC_Element_ScrollDown(locationSC_Scrolldown){
    let locationSC_Scrolldown_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(6) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope");
    locationSC_Scrolldown_Element.scrollTop(locationSC_Scrolldown);
}
function locationSC_Element_Select(locationSC){ 
    let locationSC_Element=$(`#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(6) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(${locationSC})`);
    locationSC_Element.attr("locationSC_Element_Id","locationSC_Element_Id");
    let locationSC_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[locationSC_Element_Id="locationSC_Element_Id"]').dispatchEvent(locationSC_Element_Event);   
}
///////////////radio buttons///////////////////
function radio_A_No_Element_Select(){

    let radio_A_No_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(9) > td.absorbing-column > ng-form > div > div > div.hideInPrint.form-control > d2-radio-button > div > span:nth-child(2) > span.custom-radio-text.ng-binding");
    radio_A_No_Element.attr("radio_A_No_Element_Id","radio_A_No_Element_Id");
    let radio_A_No_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:false,isTrusted:true});
    document.querySelector('[radio_A_No_Element_Id="radio_A_No_Element_Id"]').dispatchEvent(radio_A_No_Element_Event);
    
    
}
function radio_B_No_Element_Select(){

    let radio_B_No_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(10) > td.absorbing-column > ng-form > div > div > div.hideInPrint.form-control > d2-radio-button > div > span:nth-child(2) > span.custom-radio-text.ng-binding");
    radio_B_No_Element.attr("radio_B_No_Element_Id","radio_B_No_Element_Id");
    let radio_B_No_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[radio_B_No_Element_Id="radio_B_No_Element_Id"]').dispatchEvent(radio_B_No_Element_Event);
    
    
}
function radio_C_No_Element_Select(){

    let radio_C_No_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(11) > td.absorbing-column > ng-form > div > div > div.hideInPrint.form-control > d2-radio-button > div > span:nth-child(2) > span.custom-radio-text.ng-binding");
    radio_C_No_Element.attr("radio_C_No_Element_Id","radio_C_No_Element_Id");
    let radio_C_No_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[radio_C_No_Element_Id="radio_C_No_Element_Id"]').dispatchEvent(radio_C_No_Element_Event);
    
}

////////////patient classification//////////
function patient_Classification_Element_DropDown(){

    let patient_Classification_Dropdown_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(14) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div > div.optionListInputText > span");
    patient_Classification_Dropdown_Element.attr("patient_Classification_Dropdown_Element_Id","patient_Classification_Dropdown_Element_Id");
    let patient_Classification_Dropdown_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[patient_Classification_Dropdown_Element_Id="patient_Classification_Dropdown_Element_Id"]').dispatchEvent(patient_Classification_Dropdown_Element_Event);
    
}
function patient_Classification_Element_Select(){

    let patient_Classification_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(14) > td.absorbing-column > ng-form > div:nth-child(1) > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(2)");
    patient_Classification_Element.attr("patient_Classification_Element_Id","patient_Classification_Element_Id");
    let patient_Classification_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[patient_Classification_Element_Id="patient_Classification_Element_Id"]').dispatchEvent(patient_Classification_Element_Event);
    
}

///////////////reason for testing select /////////////////////////////
function reason_Testing_Element_DropDown(){

    let reason_Testing_Dropdown_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(15) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div > div.optionListInputText > span");
    reason_Testing_Dropdown_Element.attr("reason_Testing_Dropdown_Element_Id","reason_Testing_Dropdown_Element_Id");
    let reason_Testing_Dropdown_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[reason_Testing_Dropdown_Element_Id="reason_Testing_Dropdown_Element_Id"]').dispatchEvent(reason_Testing_Dropdown_Element_Event);
    
}
function reason_Testing_Select(){

    let reason_Testing_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(15) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(2)");
    reason_Testing_Element.attr("reason_Testing_Element_Id","reason_Testing_Element_Id");
    let reason_Testing_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[reason_Testing_Element_Id="reason_Testing_Element_Id"]').dispatchEvent(reason_Testing_Element_Event);
    
}
////////////type of specimen select ///////////////
function typeOfSpecimen_DropDown(){

    let typeOfSpecimen_Dropdown_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(19) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div > div.optionListInputText > span");
    typeOfSpecimen_Dropdown_Element.attr("typeOfSpecimen_Dropdown_Element_Id","typeOfSpecimen_Dropdown_Element_Id");
    let typeOfSpecimen_Dropdown_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[typeOfSpecimen_Dropdown_Element_Id="typeOfSpecimen_Dropdown_Element_Id"]').dispatchEvent(typeOfSpecimen_Dropdown_Element_Event);
    
}
function typeOfSpecimen_Element_Select(typeOfSpecimen){
    let typeOfSpecimen_Element=$(`#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(19) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(${typeOfSpecimen})`);
    typeOfSpecimen_Element.attr("typeOfSpecimen_Element_Id","typeOfSpecimen_Element_Id");
    let typeOfSpecimen_Element_Event=new MouseEvent("click",{bubbles:false,cancelable:true,isTrusted:true});
    document.querySelector('[typeOfSpecimen_Element_Id="typeOfSpecimen_Element_Id"]').dispatchEvent(typeOfSpecimen_Element_Event);
}
///////////////type of test select ///////////////////////
function typeOfTest_DropDown(){

    let typeOfTest_Dropdown_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(23) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div > div.optionListInputText > span");
    typeOfTest_Dropdown_Element.attr("typeOfTest_Dropdown_Element_Id","typeOfTest_Dropdown_Element_Id");
    let typeOfTest_Dropdown_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[typeOfTest_Dropdown_Element_Id="typeOfTest_Dropdown_Element_Id"]').dispatchEvent(typeOfTest_Dropdown_Element_Event);
    
}
function typeOfTest_Select(){

    let tyoeOfTest_Element=$("#dataentry > div > div > div.panel-body.dashboard-widget-container > div > div > div > div.row > div > div > form > div.ng-scope > div:nth-child(2) > div > div > accordion > div > div > div.panel-collapse.in > div > div > table > tbody > tr:nth-child(23) > td.absorbing-column > ng-form > div > div.hideInPrint > div > d2-option-list > div > div.optionListPopup.ng-scope > div.optionListVsRepeater.ng-scope > div:nth-child(3)");
    tyoeOfTest_Element.attr("tyoeOfTest_Element_Id","tyoeOfTest_Element_Id");
    let tyoeOfTest_Element_Event=new MouseEvent("click",{bubbles:true,cancelable:true,isTrusted:true});
    document.querySelector('[tyoeOfTest_Element_Id="tyoeOfTest_Element_Id"]').dispatchEvent(tyoeOfTest_Element_Event);
}  
