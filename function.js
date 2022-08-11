/* eslint-disable no-new-object */
import axios from 'axios'
import CONFIG from '../../configs/configs'
import $ from 'jquery';
import { Config } from "aws-sdk";

export  function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}
export function ChangeSearchingDateFormat(sdate) {
  let ndate = "";
  console.log(sdate);
  if (sdate === '' || sdate === null) {
    ndate = null;
  } else {
    let year = sdate?.getFullYear();
    let month = ('0' + (sdate?.getMonth() + 1)).slice(-2);
    let day = ('0' + sdate?.getDate()).slice(-2);
    ndate = year + '-' + month + '-' + day;
  }
  return ndate
}
export function ChangeDateFormat(sdate) {
  if (sdate === '') sdate = new Date();
  let year = sdate?.getFullYear();
  let month = ('0' + (sdate?.getMonth() + 1)).slice(-2);
  let day = ('0' + sdate?.getDate()).slice(-2);
  const ndate = year + '-' + month + '-' + day;
  return ndate
}
export function exceptTimeFromDate(sdate) {
  if (sdate === null || sdate === '') return "";
  return sdate.substr(0,10);
}
export function ChangeDateFormatToKorean(sdate) {
  if (sdate === '') sdate = new Date();
  let year = sdate.getFullYear();
  let month = sdate.getMonth() + 1;
  let day = sdate.getDate();
  const ndate = year + '년 ' + month + ' 월' + day + ' 일';
  return ndate
}
export function ChangeDateTimeFormat(sdate) {
  if (sdate === '') sdate = new Date();
  let year = sdate.getFullYear();
  let month = ('0' + (sdate.getMonth() + 1)).slice(-2);
  let day = ('0' + sdate.getDate()).slice(-2);

  let hours = ('0' + sdate.getHours()).slice(-2);
  let minutes = ('0' + sdate.getMinutes()).slice(-2);
  let seconds = ('0' + sdate.getSeconds()).slice(-2);

  const ndate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  return ndate
}
export function ChangeDateMonth(sdate, imode = 0) {
  if (sdate === null || sdate === undefined || sdate === "") {
    return "";
  } else {
    let sdateString = sdate.substr(0, 7);
    if (imode === 1) sdateString = sdateString.replace(/-/g, '.');
    return sdateString;
  }
}
export function ChangeDateString(sdate) {
  if (sdate === null || sdate === undefined || sdate === "") {
    return "";
  } else {
    return sdate.replace(/-/g, '.');
  }
}
export function ChangeDateStringOnlyDate(sdate) {
  if (sdate === null || sdate === undefined || sdate === "") {
    return "";
  } else {
    sdate = sdate.substr(0,10);
    return sdate.replace(/-/g, '.');
  }
}
export function ChangeDateStringToKorean(sdate) {
  if (sdate === null || sdate === undefined || sdate === "") {
    return "";
  } else {
    const dateArray = sdate.split('-');
    const ndate = dateArray[0] + '년 ' + Number(dateArray[1]) + ' 월 ' + Number(dateArray[2]) + ' 일';
    return ndate
  }
}
export function ChangeDateTimeString(sdate) {
  if (sdate === null || sdate === undefined || sdate === "") {
    return "";
  } else {
    const dateArray = sdate.split(' ');
    return dateArray[0].replace(/-/g, '.') + " " + dateArray[1];
  }
}

export function ChoiceDate(sdate1, sdate2) {
  if (sdate1 !== null && sdate2 !== null) {
    //console.log(new Date(sdate1));
    return new Date(sdate1);
  } else if (sdate1 !== null) {
    //console.log(new Date(sdate1));
    return new Date(sdate1);
  } else if (sdate2 !== null) {
    //console.log(new Date(sdate2));
    return new Date(sdate2);
  } else {
    //console.log(new Date());
    return new Date();
  }
}

export function CalculateCareers(fnum1, fnum2) {

  console.log(fnum1, fnum2);
  const fnums = fnum1 + fnum2;
  const sterms = fnums.toString();

  console.log(fnums);
  if (sterms.indexOf('.') >= 0) {
    const termsArray = sterms.split('.');
    if (Number(termsArray[0]) > 0) {
      return termsArray[0] + " 년 " + termsArray[1] + " 개월";
    } else {
      return termsArray[1] + " 개월";
    }
  } else {
    return sterms + " 년";
  }
}

export function ChangeMoneyUnit(smoney) {
  if (smoney === null || smoney === undefined || smoney === 0) {
    return "없음";
  } else {
    return addThousandPoint(smoney / 10000) + " 만원";
  }
}

export function remainDays(expdate) {
  if (expdate === undefined || expdate === null || expdate === "" || expdate === 0) return 0;
  if (expdate.indexOf(' ') > 0) {
    var expdate_temp = expdate.split(' ');
    expdate = expdate_temp[0];
  }
  const expArray = expdate.split('-');
  const dday = new Date(Number(expArray[0]), Number(expArray[1] - 1), Number(expArray[2]));

  const today = new Date();
  let year = today.getFullYear();
  let month = ('0' + today.getMonth()).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);
  const tday = new Date(Number(year), Number(month), Number(day));

  //console.log(expdate,dday);
  const gap = dday.getTime() - tday.getTime();
  let remaindays = Math.ceil(gap / (1000 * 60 * 60 * 24));
  if(remaindays < 0)
    remaindays = 0;
  return remaindays;
}
//1000단위 실시간 점검
export function realThousandPoint(snum) {
  if (snum === undefined || snum === null || snum === "") return 0;
  var snum2 = snum.toString().replace(/[^\d]+/g, "");
  return parseInt(snum2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//천단위 콤마찍기--
export function addThousandPoint(snum) {
  if (snum === undefined || snum === null || snum === "") return 0;
  return parseInt(snum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//천단위 콤마지우기
export function removeThousandPoint(snum) {
  return snum.replace(/[^\d]+/g, "");
}
//전화번호에 - 넣기
export function changeMobileFormat(mbNumber) {
  if (mbNumber === undefined || mbNumber === "" || mbNumber === null) return "";
  return mbNumber.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3");
}
export function changeMobileNumber(mbNumber) {
  if (mbNumber === undefined || mbNumber === "" || mbNumber === null) return "";
  return mbNumber.replace(/-/g, '');
}
//아이디 문자열 점검
export function checkIDString(asValue) {
  var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,25}$/; //  6자 이상 영문 + 숫자 조합
  if (!regExp.test(asValue)) {
    return false;
  } else {
    return true;
  }
}
//전화번호 검색
export function isPhone(asValue) {
  var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
  var regExp2 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
  if (regExp.test(asValue)) {
    return regExp.test(asValue);
  } else if (regExp2.test(asValue)) {
    return regExp2.test(asValue);
  }
};
//이메일 문자열 점검
export function checkEmailString(eString) {
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (eString.match(regExp) != null) return true;
  else return false;
}
//비밀번호 형식 검사
export function isPassword(asValue) {
  var regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/; //  8 ~ 16자 영문, 숫자, 특수문자 조합
  if (!regExp.test(asValue)) {
    return false;
  }
  return regExp.test(asValue) // 형식에 맞는 경우 true 리턴
}
//숫자 체크 정규식
export function onlyNumber(str) {
  return str.replace(/[^0-9.]/g, "").replace(/(\.*)\./g, "$1");
}

//사업자등록번호
export function checkCorporateRegiNumber(number){
  number = number.replace(/\s/gi, ""); 
	var numberMap = number.replace(/-/gi, '').split('').map(function (d){
		return parseInt(d, 10);
	});
  console.log("numberMap")
  console.log(numberMap)
	
	if(numberMap.length === 10){
		var keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5];
		var chk = 0;
		
		keyArr.forEach(function(d, i){
			chk += d * numberMap[i];
		});
		
		chk += parseInt((keyArr[8] * numberMap[8])/ 10, 10);
		console.log(chk);
		return Math.floor(numberMap[9]) === ( (10 - (chk % 10) ) % 10);
	}
	
	return false;
}

//사업자등록번호
export function isTax(asValue) {
  //var regExp = /^(?=.*[-])(?=.*[0-9]).{8,16}$/;
  var regExp = /^(\d{3,3})+[-]+(\d{2,2})+[-]+(\d{5,5})$/;
  

  regExp.test("asValue")  
  console.log(asValue)
  console.log(regExp.test(asValue))
  if (regExp.test(asValue)) {
    return regExp.test(asValue);
  } else {
    return false;
  }
}
export function isEmptyObj(obj)  {
  if(obj.constructor === Object && Object.keys(obj).length === 0)  {
    return true;
  }
  return false;
}
//경력 숫자를 문자로 - 검색시
export function resetCareerForSearching(fterms) {
  if (fterms === undefined || fterms === "" || fterms == null) return "무관";
  if (fterms === 0) {
    return "무관";
  } else {
    const sterms = fterms.toString();
    if (sterms.indexOf('.') >= 0) {
      const termsArray = sterms.split('.');
      if (Number(termsArray[0]) > 0) {
        return "경력" + termsArray[0] + " 년 " + termsArray[1] + " 개월";
      } else {
        return "경력" + termsArray[1] + " 개월";
      }
    } else {
      return "경력" + sterms + " 년";
    }
  }
}
//경력 숫자를 문자로
export function resetCareerFromNumbers(fterms) {
  if (fterms === undefined || fterms === "" || fterms == null) return "무관";
  if (fterms === 0) {
    return "무관";
  } else {
    const sterms = fterms.toString();
    if (sterms.indexOf('.') >= 0) {
      const termsArray = sterms.split('.');
      if (Number(termsArray[0]) > 0) {
        return termsArray[0] + " 년 " + termsArray[1] + " 개월";
      } else {
        return termsArray[1] + " 개월";
      }
    } else {
      return sterms + " 년";
    }
  }
}
export function resetCareerFromMonths(smonths) {
  if (smonths === undefined || smonths === "" || smonths === null) return "없음";
  if (smonths === 0) {
    return "없음";
  } else {
    const years = Math.floor(smonths / 12);
    const months = smonths % 12;
    var sterms = '';
    if (years > 0) {
      sterms = years + " 년";
    }
    if (months > 0) {
      if (sterms !== "") sterms += " ";
      sterms += months + " 개월";
    }
    return sterms
  }
}
export function CalculateCareerBetweenMonths(edate, sdate) {
  if (edate === undefined || edate === "" || edate === null) {
    edate = ChangeDateFormat('');
  }
  const expArray1 = sdate.split('-');
  const startday = new Date(Number(expArray1[0]), Number(expArray1[1] - 1), Number(expArray1[2]));
  const expArray2 = edate.split('-');
  const endday = new Date(Number(expArray2[0]), Number(expArray2[1] - 1), Number(expArray2[2]));
  var months;
  months = (endday.getFullYear() - startday.getFullYear()) * 12;
  months -= startday.getMonth();
  months += endday.getMonth();
  if (months < 0) months = 0;
  return Number(months);
}
export function resetCareerBetweenDays(edate, sdate) {
  if (edate === undefined || edate === "" || edate === null) return "신입";
  if (sdate === undefined || sdate === "" || sdate === null) return "신입";
  const expArray1 = sdate.split('-');
  const startday = new Date(Number(expArray1[0]), Number(expArray1[1] - 1), Number(expArray1[2]));
  const expArray2 = edate.split('-');
  const endday = new Date(Number(expArray2[0]), Number(expArray2[1] - 1), Number(expArray2[2]));
  var years, months;
  months = (endday.getFullYear() - startday.getFullYear()) * 12;
  months -= startday.getMonth();
  months += endday.getMonth();
  if (months < 0) months = 0;
  years = Math.floor(months / 12);
  months = months % 12;

  if (years === 0 && months === 0) {
    return "신입";
  } else {
    if (years === 0) {
      return "경력  " + months + "개월";
    } else {
      if (months > 0) {
        return "경력  " + years + "년 " + months + "개월";
      } else {
        return "경력  " + years + "년";
      }
    }
  }
}
export function getCareerBetweenDays(edate, sdate) {
  if (edate === undefined || edate === "" || edate === null) return "신입";
  if (sdate === undefined || sdate === "" || sdate === null) return "신입";

  const expArray1 = sdate.split('-');
  const startday = new Date(Number(expArray1[0]), Number(expArray1[1] - 1), Number(expArray1[2]));
  const expArray2 = edate.split('-');
  const endday = new Date(Number(expArray2[0]), Number(expArray2[1] - 1), Number(expArray2[2]));
  var years, months;
  months = (endday.getFullYear() - startday.getFullYear()) * 12;
  months -= startday.getMonth();
  months += endday.getMonth();
  if (months < 0) months = 0;
  years = Math.floor(months / 12);
  months = months % 12;

  if (years === 0 && months === 0) {
    return "신입";
  } else {
    if (months > 0) {
      return  years + "년 " + months + "개월";
    } else {
      return  years + "년";
    }
  }
}
//회원구분
export function ChangeMemberTypeString(mode, type) {
  if (mode === 0) {
    return "일반회원";
  } else if (mode === 1) {
    return "기업회원";
  } else {
    if (type === 0) {
      return "헤드헌터(프리랜서)";
    } else {
      return "헤드헌터(서치폼)";
    }
  }
}

//주민등록번호 마킹
export function MaskingCivilCode(scode) {
  console.log(scode);
  if (scode === undefined || scode === null || scode === "") {
    return "";
  }
  var ninArray = scode.split('-');
  var retString = ninArray[0] + '-' + ninArray[1].replace(/([0-9]{6})$/gi, "******")
  return retString;
}

//문자열 마킹
export function MaskingString(sString,ist,showString) {
  if (sString === undefined || sString === null || sString === "") {
    return "";
  }
  let newString = "";
  let ileng = sString.length;
  if(ist > 0) {
    newString = sString.substr(0,ist);
  }
  ileng = ileng - ist;
  for(var i=ist; i <= ileng; i++) {
    newString += showString;
  }
  return newString;
}


//포트폴리오 파일 저장 - status=0:임시저장/status=1:정식저장
export const file_upload = async (file, re_idx, status) => {
  if (file) {
    const formData = new FormData();
    console.log(re_idx);
    formData.append('port_folio', file);
    console.log(formData.get('port_folio'));
    let apiName = "port_folio";
    if(status === 0) {
      apiName = "port_tmp_folio";
    }

    //이미지 업로드
    await axios.post(`${CONFIG.SERVER_HOST}/${apiName}`, formData)
      .then(res => {
        const { fileName } = res.data;
        console.log(fileName);
        // return fileName;
        file_upload_insert(fileName, re_idx, status);
    });
  }
}
export const move_file_to = async (filename,re_idx, status) => {
  const param = new URLSearchParams();
  param.append('filename', filename);
  param.append('rcp_re_idx', re_idx);
  param.append('toWhere', status);
  //이미지 업로드
  await axios.post(`${CONFIG.SERVER_HOST}/move_file_to`, param).then(res => {
    if(res.data.retvalue === 1) {
      console.log('move OK')
    } else {
      console.log('move Fail')
    }
  });
}

//파일 업로드
export const file_upload1 = async (api, file, re_idx, status) => {
  const formData = new FormData();

  if (file) {
    console.log(file);
    formData.append(api, file);
    console.log(formData.get(api));

    // //이미지 업로드
    await axios.post(`${CONFIG.SERVER_HOST}/${api}`, formData)
      .then(async (res) => {
        const { fileName } = res.data;
        console.log(fileName);
        //return fileName;
        temp_resume_ufile_update(fileName, re_idx, status);
        return fileName;
      });
  }
}

//파일 업로드
export const file_upload2 = async (api, file, re_idx) => {
  const formData = new FormData();
  if (file) {
    console.log(file);
    formData.append(api, file);
    console.log(formData.get(api));
    console.log(`${CONFIG.SERVER_HOST}/${api}`);
    // //이미지 업로드
    await axios.post(`${CONFIG.SERVER_HOST}/port_folio`, formData).then(res => {
        const { fileName } = res.data;
        console.log(fileName);
        //  file_upload_insert(fileName, re_idx);

      });
  }
}

//정식 status = 1/임시 저장 status = 0
export const file_upload_insert = async (rcp_ufile, re_idx, status) => {
  const param = new URLSearchParams();
  param.append('rcp_re_idx', re_idx);
  param.append('rcp_ufile', rcp_ufile);
  param.append('status', status);
  await axios.post(`${CONFIG.SERVER_HOST}/port_folio_file_insert`, param).then((res) => {
      console.log(res);
  });
}

//temp_resume_ufile_update
export const temp_resume_ufile_update = async (re_ufile, re_idx, status) => {
  const param = new URLSearchParams();
  console.log(re_ufile);
  param.append('re_ufile', re_ufile);
  param.append('re_photo', 1);
  param.append('re_idx', re_idx);
  param.append('status', status);
  await axios.post(`${CONFIG.SERVER_HOST}/temp_resume_ufile_update`, param).then((res) => {
      console.log(res);
  });
}

//첨부파일 확장자 체크
export function checkFileName(str) {
  var ext = str.split('.');
  var ext1 = "." + ext[1].toLowerCase();
  var reg = /(.*?)\.(xlsx|docx|pdf|zip|hwp|ppt)$/;

  if (ext1.match(reg)) {
    return true;
  } else {
    return false;
  }
}

//코드생성 - 랜덤함수
export function randomString(stringLength) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'

  let randomstring = ''
  for (let i = 0; i < stringLength; i++) {
    const rnum = Math.floor(Math.random() * chars.length)
    randomstring += chars.substring(rnum, rnum + 1)
  }
  return randomstring
}

//공통 테이블 조회 함수
export const common_select_function = (column, table, where, option) => {
  const param = new URLSearchParams();
  //column
  param.append('column', column);
  param.append('table', table);
  param.append('where', where);
  param.append('option', option);

  console.log('테이블 조회 함수 !!!!11111', table);
  const data = axios.post(`${CONFIG.SERVER_HOST}/_get_select_table`, param)
    .then((res) => {
      console.log(res);
      console.log('테이블 조회 함수 !!!!222222');
      if (res.data.retvalue === 1) {
        console.log('테이블 조회 함수 !!!!333333');

        console.log(res.data);
        return res.data.result;
      } else {
        return 0;
      }
    });
  return data;
}

export const send_push = async  (title, content) => {
  const FCM_KEY = "AAAAWg86CJw:APA91bEg9ruDA-NE9K-fm2pPlwKF9Ty84QPIV1EVk8jaAiw8SYdUjdagZtfY21styfbKCifOejgvRYdCqwJWIWVpZWcPkaUa3Srzls29PhUR8sJ-cGmg2gsbU7b2QIOzqOoi6u9LXww-";
  /* const FCM_URL = "https://fcm.googleapis.com/fcm/send"; */
  const FCM_TOPIC = "survey";

  // const token = await axios.get(`${CONFIG.SERVER_HOST_V2}/api/v2/front/getUserToken?user_id=${localStorage.getItem('user_id')}`).then((response) => {
  //   console.log("reviewCount1", response.data[0]);
  //   return  response.data[0].use_count;
  // });
  // const title = await axios.get(`${CONFIG.SERVER_HOST_V2}/api/v2/front/getPushTitle?id=2`).then((response) => {
  //   console.log("reviewCount1", response.data[0]);
  //   return  response.data[0].use_count;
  // });

  // const content = await axios.get(`${CONFIG.SERVER_HOST_V2}/api/v2/front/getPushContent?id=2`).then((response) => {
  //   console.log("reviewCount1", response.data[0]);
  //   return  response.data[0].use_count;
  // });

 /*  var key = ''; */

  // var to =token;
  var to =`/topics/${FCM_TOPIC}`;
  var notification = {
    'title': title,
    'body': content,
    'icon': '아이콘',
    'click_action': 'url',
    'android_channel_id':'survey'
  };

  fetch('https://fcm.googleapis.com/fcm/send', {
    'method': 'POST',
    'headers': {
      'Authorization': 'key=' + FCM_KEY,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({
      'notification': notification,
      'to': to
    })
  }).then(function (response) {
    console.log('fetch success');
    console.log(response);
    alert("PUSH 발송 되었습니다");
  }).catch(function (error) {
    console.error(error);
    alert('fetch error');
  })
}

export function ChangeDate(sdate) {
  if (sdate === null || sdate === undefined || sdate === "") {
    return "";
  } else {
    const dateArray = sdate.split(' ');
    return dateArray[0];
  }
}

export const resetNavMenu = (imenu) => {
  //console.log(imenu);
  let navBlock = document.querySelector('.nav');
  let navItems = navBlock.querySelectorAll('.depth1');
  //console.log(navItems)
  for(var i=0; i < navItems.length; i++) {
    if(navItems[i].classList.contains('active')) {
      navItems[i].classList.remove('active');
    }
  }
  navItems[imenu].classList.add('active');
}

export const resetNavSubMenu = (main_idx, sub_idx) => {
  let navBlock = document.querySelector('.nav');
  let navItems = navBlock.querySelectorAll('.depth2 > li');
  //console.log(navItems)
  for(var i=0; i < navItems.length; i++) {
    if(navItems[i].classList.contains('active')) {
      navItems[i].classList.remove('active');
    }
  }
  if(sub_idx < 0) {
    return;
  }
  const depth1Boxes = document.querySelectorAll('.depth1');
  const depth2Boxes = depth1Boxes[main_idx].querySelector('.depth2');
  const liBoxes = depth2Boxes.querySelectorAll('li');
//   console.log(liBoxes)
  if(!liBoxes[sub_idx].classList.contains('active')) {
    liBoxes[sub_idx].classList.add('active');
  }
}
//Company - Heding
export const resetNavSubMenuForHeding = (sub_idx) => {
  let navBlock = document.querySelector('.nav');
  let navItems = navBlock.querySelectorAll('.depth2 > li');
  for(var i=0; i < navItems.length; i++) {
    if(navItems[i].classList.contains('active')) {
      navItems[i].classList.remove('active');
    }
  }
  if(sub_idx < 0) {
    return;
  }
  const depth1Boxes = document.querySelectorAll('.depth1');
  const depth2Boxes = depth1Boxes[5].querySelector('.depth2');
  const liBoxes = depth2Boxes.querySelectorAll('li');
  for(var j=0; j < liBoxes.length; j++) {
    if(liBoxes[j].getAttribute('id') === 'heding_'+sub_idx) {
      if(!liBoxes[j].classList.contains('active')) {
        liBoxes[j].classList.add('active');
      }
      break;
    }
  }
}
//화면조정
export const mobileWrap = () => {
  if (window.innerWidth < 890) {
    let tr = $(".tr");
    if (!tr.children().hasClass("m_wrap")) {
      tr.wrapInner("<div class='m_wrap'>");
      for(var i = 0; i < tr.length; i++) {
        let mWrap = $(tr[i]).children(".m_wrap");
        mWrap.after($(mWrap).children(".row_btn"));
      }
    }
  } else {
    let mWrap = $(".m_wrap");
    mWrap.children().unwrap();
  }
}

export const mobileWrapSearchTalent=()=>{
  if (window.innerWidth < 1024) {
    let tr = document.querySelectorAll(".tr");
    if (!$(tr).children().hasClass("m_colgroup")) {
      for(var i = 0; i < tr.length; i++) {
        $(tr[i]).find(".m_group").wrapAll("<div class='m_colgroup group1'></div>");
        $(tr[i]).find(".row_sort").wrapAll("<div class='m_colgroup group2'></div>");
      }
    }
  } else {
    $(".m_colgroup").children().unwrap();
  }
}

export const addDateDBFormat = (sdate,adddays) => {
  let fdate = new Date();
  if(sdate !== null && sdate !== "" && sdate !== "null") {
    fdate = new Date(sdate);
  }
  if(adddays === 0) return sdate;
  fdate.setDate(fdate.getDate() + adddays);
  return ChangeDateFormat(fdate);
}

//날짜형식변경 - 인증경력
export const dateToString = (date) => {
  return date.getFullYear() + (date.getMonth() + 1).toString().padStart(2, '0') + date.getDate().toString().padStart(2, '0');
}


//모바일 인증
function isReactNative() {
    if (isMobile()) return true;
    return false;
  }
  function isMobile() {
    var UserAgent = navigator.userAgent;
    if (
      UserAgent.match(
        /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i
      ) != null ||
      UserAgent.match(/LG|SAMSUNG|Samsung/) != null
    ) {
      return true;
    } else {
      return false;
    }
  }

  
//휴대폰 인증 - 회원가입시
export const Certification = (varInputs,setInputs,varAuth, setAuth, imode) => {
    const IMP = window.IMP;
    const userCode = "imp42964606";
    const data = {
      // param
      merchant_uid: `mid_${new Date().getTime()}`, // 주문 번호
      company: "HEDING",
      carrier: "",
      name: "",
      phone: "",
      m_redirect_url: `${Config.m_redirect_url}/JoinUs`, // 모바일환경에서 popup:false(기본값) 인 경우 필수, 예: https://www.myservice.com/payments/complete/mobile
      popup: true, // PC환경에서는 popup 파라메터가 무시되고 항상 true 로 적용됨
    };
    const data2 = {
      // param
      merchant_uid: `mid_${new Date().getTime()}`, // 주문 번호
      company: "HEDING",
      carrier: "",
      name: "",
      phone: "",
    };
    const data3 = {
      // param
      merchant_uid: `mid_${new Date().getTime()}`, // 주문 번호
      company: "HEDING",
      carrier: "",
      name: "",
      phone: "",
      // m_redirect_url: `${Config.m_redirect_url}/JoinUs`, // 모바일환경에서 popup:false(기본값) 인 경우 필수, 예: https://www.myservice.com/payments/complete/mobile
      popup: true, // PC환경에서는 popup 파라메터가 무시되고 항상 true 로 적용됨
    };
  
    let certData = {...data3};
    if (isReactNative()) {
      // 5. 리액트 네이티브 환경에 대응하기 
      if (window.ReactNativeWebView) {
        const params = {
          userCode, // 가맹점 식별코드
          data2, // 본인인증 데이터
          type: "certification", // 결제와 본인인증 구분을 위한 필드
        };
        const paramsToString = JSON.stringify(params);
        window.ReactNativeWebView.postMessage(paramsToString);
        return;
      }
    } else {
      certData = {...data};
    }
    IMP.init(userCode);
    IMP.certification(certData, (rsp) => {
      if (rsp.success === true) {
        const params = new URLSearchParams();
        params.append("imp_uid", rsp.imp_uid);
        axios.post(`${CONFIG.SERVER_HOST}/certifications`, params).then((res) => {
          console.log(res.data);
          const mobile = res.data.phone;
          if(imode === 0){
              setInputs({...varInputs,mobile: mobile,certification: true});
          }else{
            setInputs({...varInputs,mem_mobile: mobile,mem_certification: 1});
          }
          setAuth({...varAuth, mobile:true})
        });
      } else {
        alert(`인증에 실패하였습니다. 에러 내용: ${rsp.error_msg}`);
      }
    });
  }

  //휴대폰 인증 - 배열안에서
  export const CertificationList = (varSubMemberList, setSubMemberList, varSubAuthList, setSubAuthList, mem_idx) => {
    //배열에서 변경할 순서 찾기
    const findIndex1 = varSubMemberList.findIndex(element => element.mem_idx === 0);
    const findIndex2 = varSubAuthList.findIndex(element => element.mem_idx === 0);

    const IMP = window.IMP;
    const userCode = "imp42964606";
    const data = {
      // param
      merchant_uid: `mid_${new Date().getTime()}`, // 주문 번호
      company: "HEDING",
      carrier: "",
      name: "",
      phone: "",
      m_redirect_url: `${Config.m_redirect_url}/JoinUs`, // 모바일환경에서 popup:false(기본값) 인 경우 필수, 예: https://www.myservice.com/payments/complete/mobile
      popup: true, // PC환경에서는 popup 파라메터가 무시되고 항상 true 로 적용됨
    };
    const data2 = {
      // param
      merchant_uid: `mid_${new Date().getTime()}`, // 주문 번호
      company: "HEDING",
      carrier: "",
      name: "",
      phone: "",
    };
    const data3 = {
      // param
      merchant_uid: `mid_${new Date().getTime()}`, // 주문 번호
      company: "HEDING",
      carrier: "",
      name: "",
      phone: "",
      // m_redirect_url: `${Config.m_redirect_url}/JoinUs`, // 모바일환경에서 popup:false(기본값) 인 경우 필수, 예: https://www.myservice.com/payments/complete/mobile
      popup: true, // PC환경에서는 popup 파라메터가 무시되고 항상 true 로 적용됨
    };

    let certData = {...data3};
    if (isReactNative()) {
      // 5. 리액트 네이티브 환경에 대응하기 
      if (window.ReactNativeWebView) {
        const params = {
          userCode, // 가맹점 식별코드
          data2, // 본인인증 데이터
          type: "certification", // 결제와 본인인증 구분을 위한 필드
        };
        const paramsToString = JSON.stringify(params);
        window.ReactNativeWebView.postMessage(paramsToString);
        return;
      } 
    } else {
      certData = {...data};
    }
    IMP.init(userCode);
    IMP.certification(certData, (rsp) => {
      if (rsp.success === true) {
        const params = new URLSearchParams();
        params.append("imp_uid", rsp.imp_uid);
        axios.post(`${CONFIG.SERVER_HOST}/certifications`, params).then((res) => {
          console.log(res.data);
          const mobile = res.data.phone;
          //전번변경
          let copyData1 = [...varSubMemberList];
          copyData1[findIndex1]={...copyData1[findIndex1],mem_mobile:mobile,mem_certification: 1};
          setSubMemberList(copyData1);
          //점검 확인
          let copyData2 = [...varSubAuthList];
          copyData2[findIndex2]={...copyData2[findIndex2], mobile:true};
          setSubAuthList(copyData2);
        });
      } else {
        alert(`인증에 실패하였습니다. 에러 내용: ${rsp.error_msg}`);
      }
    });
  }

//문자열에 공백이 있는 경우
export function blank_pattern (asValue) {
  let blankStr = /[\s]/g;
  if (blankStr.test(asValue)) {
    return false;
  } else {
    return true;
  }
}

//문자열에 특수문자가 있는 경우
export function special_pattern (asValue) {
  let specialStr = /[`~!@#$%^&*|\\\'\";:\/?]/gi; //eslint-disable-line
  if (specialStr.test(asValue)) {
    return false;
  } else {
    return true;
  }
}

//문자열에 한글, 영문만 입력 가능
export function name_pattern (asValue) {
  let nameRegExp  = /^[가-힣a-zA-Z]+$/; 
  if (nameRegExp.test(asValue)) {
    return false;
  } else {
    return true;
  }
}

//문자열에 숫자가 있는 경우
export function include_num (asValue) {
  let numRegExp  = /^[0-9]+$/ 
  if (numRegExp.test(asValue)) {
    return false;
  } else {
    return true;
  }
}

//접속자 IP 주소 가져오기
export const getIPData = async (varInputs,setInputs,sname) => {
  await axios.get("https://geolocation-db.com/json/").then((res) => {
    if(sname === '') {
      setInputs(res.data.IPv4);
    } else {
      setInputs({ ...varInputs, [sname]: res.data.IPv4 });
    }
  });
};

//이메일중복검사 버튼 표시 결정
export const CheckDuplicationObject = (objID,bmode) => {
  //중복확인버튼 표시 유무
  const objBotton = document.getElementById(objID);
  console.log(objBotton);
  console.log(bmode);
  if(!bmode) {
    if(objBotton.classList.contains('hide')) objBotton.classList.remove('hide');
  } else {
    if(!objBotton.classList.contains('hide')) objBotton.classList.add('hide');
  }
}
//파일 input을 리셋
export const resetFileForm = (elFileForm) => {
  var orgParent = elFileForm.parentNode;
  var orgNext = elFileForm.nextSibling;

  var tmp = document.createElement('form');
  tmp.appendChild(elFileForm);

  tmp.reset();
  orgParent.insertBefore(elFileForm,orgNext);
}

//문자열 변환 —— 데이타베이스 저장
export const escapeHtml = (stext) => {
  if(stext === undefined || stext === null || stext === "") return "";
  return stext.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
export const unescapeHtml = (stext) => {
  if(stext === undefined || stext === null || stext === "") return "";
  return stext.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#039;/g, "'");
};

//br 처리
export const changeTextArea =(text) => {

  console.log(typeof text);
  var br_text = ''; 
  br_text = text.replaceAll(/(\n|\r\n)/g, "<br>");
  // br_text = text?.replace(/&lt;/g, '<');
  // br_text = text?.replace(/&gt;/g,'>');
  // br_text = text?.replace(/&nbsp;/g,' ');
  // br_text = text?.replace(/&amp;/g, '&');
  // br_text = text?.replace(/&quot;/g, '"');
  console.log(br_text);
  return br_text;
  }