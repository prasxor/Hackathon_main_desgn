// import React from "react";
// import styled from "styled-components";

// const InputNumber = () => {
//   return (
//     <StyledWrapper>
//       <div className="ui-wrapper">
//         <input checked={true} id="Austria" name="flag" type="radio" />
//         <input id="Belgium" name="flag" type="radio" />
//         <input id="Bulgaria" name="flag" type="radio" />
//         <input id="Croatia" name="flag" type="radio" />
//         <input id="Cyprus" name="flag" type="radio" />
//         <input id="Czech" name="flag" type="radio" />
//         <input id="Denmark" name="flag" type="radio" />
//         <input id="Estonia" name="flag" type="radio" />
//         <input id="Finland" name="flag" type="radio" />
//         <input id="France" name="flag" type="radio" />
//         <input id="Germany" name="flag" type="radio" />
//         <input id="Greece" name="flag" type="radio" />
//         <input id="Hungary" name="flag" type="radio" />
//         <input id="Iceland" name="flag" type="radio" />
//         <input id="Ireland" name="flag" type="radio" />
//         <input id="Italy" name="flag" type="radio" />
//         <input id="Latvia" name="flag" type="radio" />
//         <input id="Liechtenstein" name="flag" type="radio" />
//         <input id="Lithuania" name="flag" type="radio" />
//         <input id="Luxembourg" name="flag" type="radio" />
//         <input id="Malta" name="flag" type="radio" />
//         <input id="Netherlands" name="flag" type="radio" />
//         <input id="Norway" name="flag" type="radio" />
//         <input id="Poland" name="flag" type="radio" />
//         <input id="Portugal" name="flag" type="radio" />
//         <input id="Romania" name="flag" type="radio" />
//         <input id="Slovakia" name="flag" type="radio" />
//         <input id="Slovenia" name="flag" type="radio" />
//         <input id="Spain" name="flag" type="radio" />
//         <input id="Sweden" name="flag" type="radio" />
//         <input
//           className="dropdown-checkbox"
//           name="dropdown"
//           id="dropdown"
//           type="checkbox"
//         />
//         <label className="dropdown-container" htmlFor="dropdown" />
//         <div className="input-wrapper">
//           <legend>
//             <label htmlFor="phonenumber">Phonenumber*</label>
//           </legend>
//           <div className="textfield">
//             <input pattern="\\d+" maxLength={11} id="phonenumber" type="text" />
//             <span className="invalid-msg">
//               This is not a valid phone number
//             </span>
//           </div>
//         </div>
//         <div className="select-wrapper">
//           <ul>
//             <li className="Austria">
//               <label htmlFor="Austria">
//                 <span>&#127462;&#127481;</span>Austria (+43)
//               </label>
//             </li>
//             <li className="Belgium">
//               <label htmlFor="Belgium">
//                 <span>&#127463;&#127466;</span>Belgium (+32)
//               </label>
//             </li>
//             <li className="Bulgaria">
//               <label htmlFor="Bulgaria">
//                 <span>&#127463;&#127468;</span>Bulgaria (+359)
//               </label>
//             </li>
//             <li className="Croatia">
//               <label htmlFor="Croatia">
//                 <span>&#127469;&#127479;</span>Croatia (+385)
//               </label>
//             </li>
//             <li className="Cyprus">
//               <label htmlFor="Cyprus">
//                 <span>&#127464;&#127486;</span>Cyprus (+357)
//               </label>
//             </li>
//             <li className="Czech">
//               <label htmlFor="Czech">
//                 <span>&#127464;&#127487;</span>Czech Republic (+420)
//               </label>
//             </li>
//             <li className="Denmark">
//               <label htmlFor="Denmark">
//                 <span>&#127465;&#127472;</span>Denmark (+45)
//               </label>
//             </li>
//             <li className="Estonia">
//               <label htmlFor="Estonia">
//                 <span>&#127466;&#127466;</span>Estonia (+372)
//               </label>
//             </li>
//             <li className="Finland">
//               <label htmlFor="Finland">
//                 <span>&#127467;&#127470;</span>Finland (+358)
//               </label>
//             </li>
//             <li className="France">
//               <label htmlFor="France">
//                 <span>&#127467;&#127479;</span>France (+33)
//               </label>
//             </li>
//             <li className="Germany">
//               <label htmlFor="Germany">
//                 <span>&#127465;&#127466;</span>Germany (+49)
//               </label>
//             </li>
//             <li className="Greece">
//               <label htmlFor="Greece">
//                 <span>&#127468;&#127479;</span>Greece (+30)
//               </label>
//             </li>
//             <li className="Hungary">
//               <label htmlFor="Hungary">
//                 <span>&#127469;&#127482;</span>Hungary (+36)
//               </label>
//             </li>
//             <li className="Iceland">
//               <label htmlFor="Iceland">
//                 <span>&#127470;&#127480;</span>Iceland (+354)
//               </label>
//             </li>
//             <li className="Ireland">
//               <label htmlFor="Ireland">
//                 <span>&#127470;&#127466;</span>Republic of Ireland (+353)
//               </label>
//             </li>
//             <li className="Italy">
//               <label htmlFor="Italy">
//                 <span>&#127470;&#127481;</span>Italy (+39)
//               </label>
//             </li>
//             <li className="Latvia">
//               <label htmlFor="Latvia">
//                 <span>&#127473;&#127483;</span>Latvia (+371)
//               </label>
//             </li>
//             <li className="Liechtenstein">
//               <label htmlFor="Liechtenstein">
//                 <span>&#127473;&#127470;</span>Liechtenstein (+423)
//               </label>
//             </li>
//             <li className="Lithuania">
//               <label htmlFor="Lithuania">
//                 <span>&#127473;&#127481;</span>Lithuania (+370)
//               </label>
//             </li>
//             <li className="Luxembourg">
//               <label htmlFor="Luxembourg">
//                 <span>&#127473;&#127482;</span>Luxembourg (+352)
//               </label>
//             </li>
//             <li className="Malta">
//               <label htmlFor="Malta">
//                 <span>&#127474;&#127481;</span>Malta (+356)
//               </label>
//             </li>
//             <li className="Netherlands">
//               <label htmlFor="Netherlands">
//                 <span>&#127475;&#127473;</span>Netherlands (+31)
//               </label>
//             </li>
//             <li className="Norway">
//               <label htmlFor="Norway">
//                 <span>&#127475;&#127476;</span>Norway (+47)
//               </label>
//             </li>
//             <li className="Poland">
//               <label htmlFor="Poland">
//                 <span>&#127477;&#127473;</span>Poland (+48)
//               </label>
//             </li>
//             <li className="Portugal">
//               <label htmlFor="Portugal">
//                 <span>&#127477;&#127481;</span>Portugal (+351)
//               </label>
//             </li>
//             <li className="Romania">
//               <label htmlFor="Romania">
//                 <span>&#127479;&#127476;</span>Romania (+40)
//               </label>
//             </li>
//             <li className="Slovakia">
//               <label htmlFor="Slovakia">
//                 <span>&#127480;&#127472;</span>Slovakia (+421)
//               </label>
//             </li>
//             <li className="Slovenia">
//               <label htmlFor="Slovenia">
//                 <span>&#127480;&#127470;</span>Slovenia (+386)
//               </label>
//             </li>
//             <li className="Spain">
//               <label htmlFor="Spain">
//                 <span>&#127466;&#127480;</span>Spain (+34)
//               </label>
//             </li>
//             <li className="Sweden">
//               <label htmlFor="Sweden">
//                 <span>&#127480;&#127466;</span>Sweden (+46)
//               </label>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .ui-wrapper {
//     --width: 335px;
//     --height: 50px;
//     --background: #17181f;
//     --text-color: #e0e0e2;
//     --border-color: #2a2a2d;
//     --border-focus-color: #2a2a2d;
//     --shadow-color: rgba(34, 60, 80, 0.2);
//     // --shadow-focus-color: rgba(0, 110, 255, 0.2);
//     --dropdown-button-color: #2a2a2d;
//     --dropdown-button-color: #17181f;
//     --dropdown-button-hover-color: #2a2a2d;
//   }

//   .ui-wrapper *,
//   .ui-wrapper *::before,
//   .ui-wrapper *::after {
//     -webkit-box-sizing: border-box;
//     box-sizing: border-box;
//     font-family: sans-serif;
//     color: var(--text-color);
//   }

//   .ui-wrapper {
//     width: var(--width);
//     height: var(--height);
//     display: -webkit-inline-box;
//     display: -ms-inline-flexbox;
//     border: 1px solid red;
//     display: inline-flex;
//     border-radius: 10px;
//     position: relative;
//     border: 1px solid var(--border-color);
//     background-color: var(--background);
//     -webkit-box-pack: justify;
//     -ms-flex-pack: justify;
//     justify-content: space-between;
//     padding-right: 10px;
//     -webkit-box-shadow: 0px 2px 5px 0px var(--shadow-color);
//     box-shadow: 0px 2px 5px 0px var(--shadow-color);
//     -webkit-transition: 0.4s;
//     -o-transition: 0.4s;
//     transition: 0.4s;
//     -webkit-user-select: none;
//     -moz-user-select: none;
//     -ms-user-select: none;
//     user-select: none;
//   }

//   .ui-wrapper > input {
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     appearance: none;
//     margin: 0;
//     width: 0;
//     height: 0;
//     opacity: 0;
//     position: absolute;
//     left: 9999px;
//   }

//   .dropdown-container {
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-pack: center;
//     -ms-flex-pack: center;
//     justify-content: center;
//     -webkit-box-align: center;
//     -ms-flex-align: center;
//     align-items: center;
//     padding: 0 10px;
//     cursor: pointer;
//     border-radius: 9px 0 0 9px;
//     background-color: var(--dropdown-button-color);
//   }

//   .dropdown-container::before {
//     content: "🇦🇹";
//     font-size: 20px;
//     background: none !important;
//   }

//   .dropdown-container::after {
//     content: "";
//     background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNDk0OTQ5IiB3aWR0aD0iNzAwcHQiIGhlaWdodD0iNzAwcHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDcwMCA3MDAiCiAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxwYXRoCiAgICAgICAgZD0ibTM4MC4zOSA0ODQuNzkgMzA3LjA0LTMwNS45OWMxNi43NjYtMTcuODEyIDE2Ljc2Ni00NS4wNTkgMC02MS44MjgtMTYuNzY2LTE2Ljc2Ni00NS4wNTktMTYuNzY2LTYxLjgyOCAwbC0yNzUuNiAyNzUuNi0yNzUuNi0yNzUuNmMtMTcuODEyLTE2Ljc2Ni00NS4wNTktMTYuNzY2LTYxLjgyOCAwLTE2Ljc2NiAxNi43NjYtMTYuNzY2IDQ0LjAxMiAwIDYxLjgyOGwzMDUuOTkgMzA1Ljk5YzE3LjgxMiAxNi43NjYgNDUuMDU5IDE2Ljc2NiA2MS44MjggMHoiCiAgICAgICAgZmlsbC1ydWxlPSJjdXJyZW50Q29sb3IiIC8+Cjwvc3ZnPg==");
//     width: 12px;
//     height: 12px;
//     background-position: center;
//     background-size: cover;
//     margin-left: 5px;
//     -webkit-transition: 0.2s;
//     -o-transition: 0.2s;
//     transition: 0.2s;
//   }

//   .select-wrapper {
//     width: var(--width);
//     position: absolute;
//     top: calc(var(--height) + 20px);
//     left: 0;
//     opacity: 0;
//     visibility: hidden;
//     -webkit-transition: 0.2s;
//     -o-transition: 0.2s;
//     transition: 0.2s;
//   }

//   .select-wrapper ul {
//     width: 100%;
//     background-color: white;
//     border-radius: 10px;
//     padding: 10px;
//     margin: 0;
//     list-style: none;
//     height: 300px;
//     display: -webkit-inline-box;
//     display: -ms-inline-flexbox;
//     display: inline-flex;
//     -webkit-box-orient: vertical;
//     -webkit-box-direction: normal;
//     -ms-flex-direction: column;
//     flex-direction: column;
//     -webkit-box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
//     box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
//     overflow-y: auto;
//     white-space: nowrap;
//   }

//   .select-wrapper ul li {
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-align: center;
//     -ms-flex-align: center;
//     align-items: center;
//     padding: 5px;
//     border-radius: 5px;
//   }

//   .select-wrapper ul li label {
//     width: 100%;
//   }

//   .select-wrapper ul li,
//   .select-wrapper ul li * {
//     cursor: pointer;
//   }

//   .select-wrapper ul li:hover {
//     background: lightgray;
//   }

//   .select-wrapper ul li span {
//     display: inline-block;
//     margin-right: 15px;
//   }

//   .input-wrapper {
//     width: 100%;
//     padding-left: 10px;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-orient: vertical;
//     -webkit-box-direction: normal;
//     -ms-flex-direction: column;
//     flex-direction: column;
//     -webkit-box-pack: center;
//     -ms-flex-pack: center;
//     justify-content: center;
//     row-gap: 2px;
//   }

//   .input-wrapper legend {
//     font-size: 11px;
//   }

//   .input-wrapper .textfield {
//     width: 100%;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-align: center;
//     -ms-flex-align: center;
//     align-items: center;
//   }

//   .input-wrapper .textfield::before {
//     content: "+31";
//     margin-right: 5px;
//     white-space: nowrap;
//   }

//   .input-wrapper .textfield input {
//     width: 100%;
//     font-size: 16px;
//     outline: none;
//     border: none;
//     background: none;
//   }

//   .invalid-msg {
//     font-size: 12px;
//     position: absolute;
//     color: red;
//     top: 115%;
//     left: 0;
//     opacity: 0;
//     visibility: hidden;
//     -webkit-transition: 0.2s;
//     -o-transition: 0.2s;
//     transition: 0.2s;
//   }

//   /* actions */

//   #phonenumber:invalid + .invalid-msg {
//     top: 110%;
//     opacity: 1;
//     visibility: visible;
//   }

//   .ui-wrapper:focus-within {
//     border-color: var(--border-focus-color);
//     -webkit-box-shadow: 0px 2px 5px 0px var(--shadow-focus-color);
//     box-shadow: 0px 2px 5px 0px var(--shadow-focus-color);
//   }

//   .dropdown-container:hover {
//     background-color: var(--dropdown-button-hover-color);
//   }

//   .dropdown-checkbox:checked ~ .select-wrapper {
//     top: calc(var(--height) + 5px);
//     opacity: 1;
//     visibility: visible;
//   }

//   .dropdown-checkbox:checked + .dropdown-container::after {
//     rotate: 180deg;
//     translate: 0 -2px;
//   }

//   .ui-wrapper input#Austria:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Austria:checked ~ .select-wrapper li.Austria {
//     content: "🇦🇹";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Belgium:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Belgium:checked ~ .select-wrapper li.Belgium {
//     content: "🇧🇪";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Bulgaria:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Bulgaria:checked ~ .select-wrapper li.Bulgaria {
//     content: "🇧🇬";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Croatia:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Croatia:checked ~ .select-wrapper li.Croatia {
//     content: "🇭🇷";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Cyprus:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Cyprus:checked ~ .select-wrapper li.Cyprus {
//     content: "🇨🇾";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Czech:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Czech:checked ~ .select-wrapper li.Czech {
//     content: "🇨🇿";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Denmark:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Denmark:checked ~ .select-wrapper li.Denmark {
//     content: "🇩🇰";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Estonia:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Estonia:checked ~ .select-wrapper li.Estonia {
//     content: "🇪🇪";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Finland:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Finland:checked ~ .select-wrapper li.Finland {
//     content: "🇫🇮";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#France:checked ~ .dropdown-container::before,
//   .ui-wrapper input#France:checked ~ .select-wrapper li.France {
//     content: "🇫🇷";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Germany:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Germany:checked ~ .select-wrapper li.Germany {
//     content: "🇩🇪";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Greece:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Greece:checked ~ .select-wrapper li.Greece {
//     content: "🇬🇷";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Hungary:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Hungary:checked ~ .select-wrapper li.Hungary {
//     content: "🇭🇺";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Iceland:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Iceland:checked ~ .select-wrapper li.Iceland {
//     content: "🇮🇸";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Ireland:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Ireland:checked ~ .select-wrapper li.Ireland {
//     content: "🇮🇪";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Italy:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Italy:checked ~ .select-wrapper li.Italy {
//     content: "🇮🇹";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Latvia:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Latvia:checked ~ .select-wrapper li.Latvia {
//     content: "🇱🇻";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Liechtenstein:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Liechtenstein:checked ~ .select-wrapper li.Liechtenstein {
//     content: "🇱🇮";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Lithuania:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Lithuania:checked ~ .select-wrapper li.Lithuania {
//     content: "🇱🇹";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Luxembourg:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Luxembourg:checked ~ .select-wrapper li.Luxembourg {
//     content: "🇱🇺";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Malta:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Malta:checked ~ .select-wrapper li.Malta {
//     content: "🇲🇹";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Netherlands:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Netherlands:checked ~ .select-wrapper li.Netherlands {
//     content: "🇳🇱";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Norway:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Norway:checked ~ .select-wrapper li.Norway {
//     content: "🇳🇴";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Poland:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Poland:checked ~ .select-wrapper li.Poland {
//     content: "🇵🇱";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Portugal:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Portugal:checked ~ .select-wrapper li.Portugal {
//     content: "🇵🇹";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Romania:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Romania:checked ~ .select-wrapper li.Romania {
//     content: "🇷🇴";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Slovakia:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Slovakia:checked ~ .select-wrapper li.Slovakia {
//     content: "🇸🇰";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Slovenia:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Slovenia:checked ~ .select-wrapper li.Slovenia {
//     content: "🇸🇮";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Spain:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Spain:checked ~ .select-wrapper li.Spain {
//     content: "🇪🇸";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Sweden:checked ~ .dropdown-container::before,
//   .ui-wrapper input#Sweden:checked ~ .select-wrapper li.Sweden {
//     content: "🇸🇪";
//     background-color: lightgray;
//   }

//   .ui-wrapper input#Austria:checked ~ .input-wrapper .textfield::before {
//     content: "+43";
//   }

//   .ui-wrapper input#Belgium:checked ~ .input-wrapper .textfield::before {
//     content: "+32";
//   }

//   .ui-wrapper input#Bulgaria:checked ~ .input-wrapper .textfield::before {
//     content: "+359";
//   }

//   .ui-wrapper input#Croatia:checked ~ .input-wrapper .textfield::before {
//     content: "+385";
//   }

//   .ui-wrapper input#Cyprus:checked ~ .input-wrapper .textfield::before {
//     content: "+357";
//   }

//   .ui-wrapper input#Czech:checked ~ .input-wrapper .textfield::before {
//     content: "+420";
//   }

//   .ui-wrapper input#Denmark:checked ~ .input-wrapper .textfield::before {
//     content: "+45";
//   }

//   .ui-wrapper input#Estonia:checked ~ .input-wrapper .textfield::before {
//     content: "+372";
//   }

//   .ui-wrapper input#Finland:checked ~ .input-wrapper .textfield::before {
//     content: "+358";
//   }

//   .ui-wrapper input#France:checked ~ .input-wrapper .textfield::before {
//     content: "+33";
//   }

//   .ui-wrapper input#Germany:checked ~ .input-wrapper .textfield::before {
//     content: "+49";
//   }

//   .ui-wrapper input#Greece:checked ~ .input-wrapper .textfield::before {
//     content: "+30";
//   }

//   .ui-wrapper input#Hungary:checked ~ .input-wrapper .textfield::before {
//     content: "+36";
//   }

//   .ui-wrapper input#Iceland:checked ~ .input-wrapper .textfield::before {
//     content: "+354";
//   }

//   .ui-wrapper input#Ireland:checked ~ .input-wrapper .textfield::before {
//     content: "+353";
//   }

//   .ui-wrapper input#Italy:checked ~ .input-wrapper .textfield::before {
//     content: "+39";
//   }

//   .ui-wrapper input#Latvia:checked ~ .input-wrapper .textfield::before {
//     content: "+371";
//   }

//   .ui-wrapper input#Liechtenstein:checked ~ .input-wrapper .textfield::before {
//     content: "+423";
//   }

//   .ui-wrapper input#Lithuania:checked ~ .input-wrapper .textfield::before {
//     content: "+370";
//   }

//   .ui-wrapper input#Luxembourg:checked ~ .input-wrapper .textfield::before {
//     content: "+352";
//   }

//   .ui-wrapper input#Malta:checked ~ .input-wrapper .textfield::before {
//     content: "+356";
//   }

//   .ui-wrapper input#Netherlands:checked ~ .input-wrapper .textfield::before {
//     content: "+31";
//   }

//   .ui-wrapper input#Norway:checked ~ .input-wrapper .textfield::before {
//     content: "+47";
//   }

//   .ui-wrapper input#Poland:checked ~ .input-wrapper .textfield::before {
//     content: "+48";
//   }

//   .ui-wrapper input#Portugal:checked ~ .input-wrapper .textfield::before {
//     content: "+351";
//   }

//   .ui-wrapper input#Romania:checked ~ .input-wrapper .textfield::before {
//     content: "+40";
//   }

//   .ui-wrapper input#Slovakia:checked ~ .input-wrapper .textfield::before {
//     content: "+421";
//   }

//   .ui-wrapper input#Slovenia:checked ~ .input-wrapper .textfield::before {
//     content: "+386";
//   }

//   .ui-wrapper input#Spain:checked ~ .input-wrapper .textfield::before {
//     content: "+34";
//   }

//   .ui-wrapper input#Sweden:checked ~ .input-wrapper .textfield::before {
//     content: "+46";
//   }
// `;

// export default InputNumber;

// import React, { Component } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import './InputNumber.css'

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       phone: "",
//     };
//   }

//   render() {
//     return (
//       <div className="InputNumberContainer">
//         <PhoneInput
//           country={"us"}
//           value={this.state.phone}
//           onChange={(phone) => this.setState({ phone })}
//           className="InputNumberMain"
//         />
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import "./InputNumber.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       phone: "",
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="InputNumberContainer">
//           <PhoneInput
//             country={"us"}
//             value={this.state.phone}
//             onChange={(phone) => this.setState({ phone })}
//             containerClass="InputNumberContainer"
//             inputClass="InputNumberMain"
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import styled from "styled-components";

const Input = () => {
  return (
    <StyledWrapper>
      <div className="ui-wrapper">
        <input checked={true} id="Austria" name="flag" type="radio" />
        <input id="Belgium" name="flag" type="radio" />
        <input id="Bulgaria" name="flag" type="radio" />
        <input id="Croatia" name="flag" type="radio" />
        <input id="Cyprus" name="flag" type="radio" />
        <input id="Czech" name="flag" type="radio" />
        <input id="Denmark" name="flag" type="radio" />
        <input id="Estonia" name="flag" type="radio" />
        <input id="Finland" name="flag" type="radio" />
        <input id="France" name="flag" type="radio" />
        <input id="Germany" name="flag" type="radio" />
        <input id="Greece" name="flag" type="radio" />
        <input id="Hungary" name="flag" type="radio" />
        <input id="Iceland" name="flag" type="radio" />
        <input id="Ireland" name="flag" type="radio" />
        <input id="Italy" name="flag" type="radio" />
        <input id="Latvia" name="flag" type="radio" />
        <input id="Liechtenstein" name="flag" type="radio" />
        <input id="Lithuania" name="flag" type="radio" />
        <input id="Luxembourg" name="flag" type="radio" />
        <input id="Malta" name="flag" type="radio" />
        <input id="Netherlands" name="flag" type="radio" />
        <input id="Norway" name="flag" type="radio" />
        <input id="Poland" name="flag" type="radio" />
        <input id="Portugal" name="flag" type="radio" />
        <input id="Romania" name="flag" type="radio" />
        <input id="Slovakia" name="flag" type="radio" />
        <input id="Slovenia" name="flag" type="radio" />
        <input id="Spain" name="flag" type="radio" />
        <input id="Sweden" name="flag" type="radio" />
        <input
          className="dropdown-checkbox"
          name="dropdown"
          id="dropdown"
          type="checkbox"
        />
        <label className="dropdown-container" htmlFor="dropdown" />
        <div className="input-wrapper">
          <legend>
            <label htmlFor="phonenumber">Phonenumber*</label>
          </legend>
          <div className="textfield">
            <input pattern="\\d+" maxLength={11} id="phonenumber" type="text" />
            <span className="invalid-msg">
              This is not a valid phone number
            </span>
          </div>
        </div>
        <div className="select-wrapper">
          <ul>
            <li className="Austria">
              <label htmlFor="Austria">
                <span>&#127462;&#127481;</span>Austria (+43)
              </label>
            </li>
            <li className="Belgium">
              <label htmlFor="Belgium">
                <span>&#127463;&#127466;</span>Belgium (+32)
              </label>
            </li>
            <li className="Bulgaria">
              <label htmlFor="Bulgaria">
                <span>&#127463;&#127468;</span>Bulgaria (+359)
              </label>
            </li>
            <li className="Croatia">
              <label htmlFor="Croatia">
                <span>&#127469;&#127479;</span>Croatia (+385)
              </label>
            </li>
            <li className="Cyprus">
              <label htmlFor="Cyprus">
                <span>&#127464;&#127486;</span>Cyprus (+357)
              </label>
            </li>
            <li className="Czech">
              <label htmlFor="Czech">
                <span>&#127464;&#127487;</span>Czech Republic (+420)
              </label>
            </li>
            <li className="Denmark">
              <label htmlFor="Denmark">
                <span>&#127465;&#127472;</span>Denmark (+45)
              </label>
            </li>
            <li className="Estonia">
              <label htmlFor="Estonia">
                <span>&#127466;&#127466;</span>Estonia (+372)
              </label>
            </li>
            <li className="Finland">
              <label htmlFor="Finland">
                <span>&#127467;&#127470;</span>Finland (+358)
              </label>
            </li>
            <li className="France">
              <label htmlFor="France">
                <span>&#127467;&#127479;</span>France (+33)
              </label>
            </li>
            <li className="Germany">
              <label htmlFor="Germany">
                <span>&#127465;&#127466;</span>Germany (+49)
              </label>
            </li>
            <li className="Greece">
              <label htmlFor="Greece">
                <span>&#127468;&#127479;</span>Greece (+30)
              </label>
            </li>
            <li className="Hungary">
              <label htmlFor="Hungary">
                <span>&#127469;&#127482;</span>Hungary (+36)
              </label>
            </li>
            <li className="Iceland">
              <label htmlFor="Iceland">
                <span>&#127470;&#127480;</span>Iceland (+354)
              </label>
            </li>
            <li className="Ireland">
              <label htmlFor="Ireland">
                <span>&#127470;&#127466;</span>Republic of Ireland (+353)
              </label>
            </li>
            <li className="Italy">
              <label htmlFor="Italy">
                <span>&#127470;&#127481;</span>Italy (+39)
              </label>
            </li>
            <li className="Latvia">
              <label htmlFor="Latvia">
                <span>&#127473;&#127483;</span>Latvia (+371)
              </label>
            </li>
            <li className="Liechtenstein">
              <label htmlFor="Liechtenstein">
                <span>&#127473;&#127470;</span>Liechtenstein (+423)
              </label>
            </li>
            <li className="Lithuania">
              <label htmlFor="Lithuania">
                <span>&#127473;&#127481;</span>Lithuania (+370)
              </label>
            </li>
            <li className="Luxembourg">
              <label htmlFor="Luxembourg">
                <span>&#127473;&#127482;</span>Luxembourg (+352)
              </label>
            </li>
            <li className="Malta">
              <label htmlFor="Malta">
                <span>&#127474;&#127481;</span>Malta (+356)
              </label>
            </li>
            <li className="Netherlands">
              <label htmlFor="Netherlands">
                <span>&#127475;&#127473;</span>Netherlands (+31)
              </label>
            </li>
            <li className="Norway">
              <label htmlFor="Norway">
                <span>&#127475;&#127476;</span>Norway (+47)
              </label>
            </li>
            <li className="Poland">
              <label htmlFor="Poland">
                <span>&#127477;&#127473;</span>Poland (+48)
              </label>
            </li>
            <li className="Portugal">
              <label htmlFor="Portugal">
                <span>&#127477;&#127481;</span>Portugal (+351)
              </label>
            </li>
            <li className="Romania">
              <label htmlFor="Romania">
                <span>&#127479;&#127476;</span>Romania (+40)
              </label>
            </li>
            <li className="Slovakia">
              <label htmlFor="Slovakia">
                <span>&#127480;&#127472;</span>Slovakia (+421)
              </label>
            </li>
            <li className="Slovenia">
              <label htmlFor="Slovenia">
                <span>&#127480;&#127470;</span>Slovenia (+386)
              </label>
            </li>
            <li className="Spain">
              <label htmlFor="Spain">
                <span>&#127466;&#127480;</span>Spain (+34)
              </label>
            </li>
            <li className="Sweden">
              <label htmlFor="Sweden">
                <span>&#127480;&#127466;</span>Sweden (+46)
              </label>
            </li>
          </ul>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .ui-wrapper {
    --width: 335px;
    --height: 57px;
    --background: transparent;
    --text-color: #FFFFFF;
    --border-color: #2a2a2d;
    --border-focus-color: #2a2a2d;
    --shadow-color: rgba(34, 60, 80, 0.2);
    --shadow-focus-color: rgba(0, 110, 255, 0.2);
    --dropdown-button-color: #2A2A2D;
    --dropdown-button-hover-color: #2A2A2D;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
  }

  .ui-wrapper *,
  .ui-wrapper *::before,
  .ui-wrapper *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: sans-serif;
    color: var(--text-color);
  }

  .ui-wrapper {
    width: var(--width);
    height: var(--height);
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    border-radius: 10px;
    position: relative;
    border: 1px solid var(--border-color);
    background-color: var(--background);
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-right: 10px;
    -webkit-box-shadow: 0px 2px 5px 0px var(--shadow-color);
    box-shadow: 0px 2px 5px 0px var(--shadow-color);
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .ui-wrapper > input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    left: 9999px;
  }

  .dropdown-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
    border-radius: 9px 0 0 9px;
    background-color: var(--dropdown-button-color);
  }

  .dropdown-container::before {
    content: "🇦🇹";
    font-size: 20px;
    background: none !important;
  }

  .dropdown-container::after {
    content: "";
    background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNDk0OTQ5IiB3aWR0aD0iNzAwcHQiIGhlaWdodD0iNzAwcHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDcwMCA3MDAiCiAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxwYXRoCiAgICAgICAgZD0ibTM4MC4zOSA0ODQuNzkgMzA3LjA0LTMwNS45OWMxNi43NjYtMTcuODEyIDE2Ljc2Ni00NS4wNTkgMC02MS44MjgtMTYuNzY2LTE2Ljc2Ni00NS4wNTktMTYuNzY2LTYxLjgyOCAwbC0yNzUuNiAyNzUuNi0yNzUuNi0yNzUuNmMtMTcuODEyLTE2Ljc2Ni00NS4wNTktMTYuNzY2LTYxLjgyOCAwLTE2Ljc2NiAxNi43NjYtMTYuNzY2IDQ0LjAxMiAwIDYxLjgyOGwzMDUuOTkgMzA1Ljk5YzE3LjgxMiAxNi43NjYgNDUuMDU5IDE2Ljc2NiA2MS44MjggMHoiCiAgICAgICAgZmlsbC1ydWxlPSJjdXJyZW50Q29sb3IiIC8+Cjwvc3ZnPg==");
    width: 12px;
    height: 12px;
    background-position: center;
    background-size: cover;
    margin-left: 5px;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
  }

  .select-wrapper {
    width: var(--width);
    position: absolute;
    top: calc(var(--height) + 20px);
    left: 0;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
  }

  .select-wrapper ul {
    width: 100%;
    background-color: #2A2A2D;
    border-radius: 10px;
    padding: 10px;
    margin: 0;
    list-style: none;
    height: 150px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    overflow-y: auto;
    white-space: nowrap;
  }

  .select-wrapper ul li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
  }

  .select-wrapper ul li label {
    width: 100%;
  }

  .select-wrapper ul li,
  .select-wrapper ul li * {
    cursor: pointer;
  }

  .select-wrapper ul li:hover {
    background: transparent;
  }

  .select-wrapper ul li span {
    display: inline-block;
    margin-right: 15px;
  }

  .input-wrapper {
    width: 100%;
    padding-left: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    row-gap: 2px;
  }

  .input-wrapper legend {
    font-size: 11px;
  }

  .input-wrapper .textfield {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .input-wrapper .textfield::before {
    content: "+31";
    margin-right: 5px;
    white-space: nowrap;
  }

  .input-wrapper .textfield input {
    width: 100%;
    font-size: 16px;
    outline: none;
    border: none;
    background: none;
  }

  .invalid-msg {
    font-size: 12px;
    position: absolute;
    color: red;
    top: 115%;
    left: 0;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
  }

  /* actions */

  #phonenumber:invalid + .invalid-msg {
    top: 110%;
    opacity: 1;
    visibility: visible;
  }

  .ui-wrapper:focus-within {
    border-color: var(--border-focus-color);
    -webkit-box-shadow: 0px 2px 5px 0px var(--shadow-focus-color);
    box-shadow: 0px 2px 5px 0px var(--shadow-focus-color);
  }

  .dropdown-container:hover {
    background-color: var(--dropdown-button-hover-color);
  }

  .dropdown-checkbox:checked ~ .select-wrapper {
    top: calc(var(--height) + 5px);
    opacity: 1;
    visibility: visible;
  }

  .dropdown-checkbox:checked + .dropdown-container::after {
    rotate: 180deg;
    translate: 0 -2px;
  }

  .ui-wrapper input#Austria:checked ~ .dropdown-container::before,
  .ui-wrapper input#Austria:checked ~ .select-wrapper li.Austria {
    content: "🇦🇹";
    background-color: #E0E0E2;
    color: black;
  }

  .ui-wrapper input#Belgium:checked ~ .dropdown-container::before,
  .ui-wrapper input#Belgium:checked ~ .select-wrapper li.Belgium {
    content: "🇧🇪";
    background-color: lightgray;
  }

  .ui-wrapper input#Bulgaria:checked ~ .dropdown-container::before,
  .ui-wrapper input#Bulgaria:checked ~ .select-wrapper li.Bulgaria {
    content: "🇧🇬";
    background-color: lightgray;
  }

  .ui-wrapper input#Croatia:checked ~ .dropdown-container::before,
  .ui-wrapper input#Croatia:checked ~ .select-wrapper li.Croatia {
    content: "🇭🇷";
    background-color: lightgray;
  }

  .ui-wrapper input#Cyprus:checked ~ .dropdown-container::before,
  .ui-wrapper input#Cyprus:checked ~ .select-wrapper li.Cyprus {
    content: "🇨🇾";
    background-color: lightgray;
  }

  .ui-wrapper input#Czech:checked ~ .dropdown-container::before,
  .ui-wrapper input#Czech:checked ~ .select-wrapper li.Czech {
    content: "🇨🇿";
    background-color: lightgray;
  }

  .ui-wrapper input#Denmark:checked ~ .dropdown-container::before,
  .ui-wrapper input#Denmark:checked ~ .select-wrapper li.Denmark {
    content: "🇩🇰";
    background-color: lightgray;
  }

  .ui-wrapper input#Estonia:checked ~ .dropdown-container::before,
  .ui-wrapper input#Estonia:checked ~ .select-wrapper li.Estonia {
    content: "🇪🇪";
    background-color: lightgray;
  }

  .ui-wrapper input#Finland:checked ~ .dropdown-container::before,
  .ui-wrapper input#Finland:checked ~ .select-wrapper li.Finland {
    content: "🇫🇮";
    background-color: lightgray;
  }

  .ui-wrapper input#France:checked ~ .dropdown-container::before,
  .ui-wrapper input#France:checked ~ .select-wrapper li.France {
    content: "🇫🇷";
    background-color: lightgray;
  }

  .ui-wrapper input#Germany:checked ~ .dropdown-container::before,
  .ui-wrapper input#Germany:checked ~ .select-wrapper li.Germany {
    content: "🇩🇪";
    background-color: lightgray;
  }

  .ui-wrapper input#Greece:checked ~ .dropdown-container::before,
  .ui-wrapper input#Greece:checked ~ .select-wrapper li.Greece {
    content: "🇬🇷";
    background-color: lightgray;
  }

  .ui-wrapper input#Hungary:checked ~ .dropdown-container::before,
  .ui-wrapper input#Hungary:checked ~ .select-wrapper li.Hungary {
    content: "🇭🇺";
    background-color: lightgray;
  }

  .ui-wrapper input#Iceland:checked ~ .dropdown-container::before,
  .ui-wrapper input#Iceland:checked ~ .select-wrapper li.Iceland {
    content: "🇮🇸";
    background-color: lightgray;
  }

  .ui-wrapper input#Ireland:checked ~ .dropdown-container::before,
  .ui-wrapper input#Ireland:checked ~ .select-wrapper li.Ireland {
    content: "🇮🇪";
    background-color: lightgray;
  }

  .ui-wrapper input#Italy:checked ~ .dropdown-container::before,
  .ui-wrapper input#Italy:checked ~ .select-wrapper li.Italy {
    content: "🇮🇹";
    background-color: lightgray;
  }

  .ui-wrapper input#Latvia:checked ~ .dropdown-container::before,
  .ui-wrapper input#Latvia:checked ~ .select-wrapper li.Latvia {
    content: "🇱🇻";
    background-color: lightgray;
  }

  .ui-wrapper input#Liechtenstein:checked ~ .dropdown-container::before,
  .ui-wrapper input#Liechtenstein:checked ~ .select-wrapper li.Liechtenstein {
    content: "🇱🇮";
    background-color: lightgray;
  }

  .ui-wrapper input#Lithuania:checked ~ .dropdown-container::before,
  .ui-wrapper input#Lithuania:checked ~ .select-wrapper li.Lithuania {
    content: "🇱🇹";
    background-color: lightgray;
  }

  .ui-wrapper input#Luxembourg:checked ~ .dropdown-container::before,
  .ui-wrapper input#Luxembourg:checked ~ .select-wrapper li.Luxembourg {
    content: "🇱🇺";
    background-color: lightgray;
  }

  .ui-wrapper input#Malta:checked ~ .dropdown-container::before,
  .ui-wrapper input#Malta:checked ~ .select-wrapper li.Malta {
    content: "🇲🇹";
    background-color: lightgray;
  }

  .ui-wrapper input#Netherlands:checked ~ .dropdown-container::before,
  .ui-wrapper input#Netherlands:checked ~ .select-wrapper li.Netherlands {
    content: "🇳🇱";
    background-color: lightgray;
  }

  .ui-wrapper input#Norway:checked ~ .dropdown-container::before,
  .ui-wrapper input#Norway:checked ~ .select-wrapper li.Norway {
    content: "🇳🇴";
    background-color: lightgray;
  }

  .ui-wrapper input#Poland:checked ~ .dropdown-container::before,
  .ui-wrapper input#Poland:checked ~ .select-wrapper li.Poland {
    content: "🇵🇱";
    background-color: lightgray;
  }

  .ui-wrapper input#Portugal:checked ~ .dropdown-container::before,
  .ui-wrapper input#Portugal:checked ~ .select-wrapper li.Portugal {
    content: "🇵🇹";
    background-color: lightgray;
  }

  .ui-wrapper input#Romania:checked ~ .dropdown-container::before,
  .ui-wrapper input#Romania:checked ~ .select-wrapper li.Romania {
    content: "🇷🇴";
    background-color: lightgray;
  }

  .ui-wrapper input#Slovakia:checked ~ .dropdown-container::before,
  .ui-wrapper input#Slovakia:checked ~ .select-wrapper li.Slovakia {
    content: "🇸🇰";
    background-color: lightgray;
  }

  .ui-wrapper input#Slovenia:checked ~ .dropdown-container::before,
  .ui-wrapper input#Slovenia:checked ~ .select-wrapper li.Slovenia {
    content: "🇸🇮";
    background-color: lightgray;
  }

  .ui-wrapper input#Spain:checked ~ .dropdown-container::before,
  .ui-wrapper input#Spain:checked ~ .select-wrapper li.Spain {
    content: "🇪🇸";
    background-color: lightgray;
  }

  .ui-wrapper input#Sweden:checked ~ .dropdown-container::before,
  .ui-wrapper input#Sweden:checked ~ .select-wrapper li.Sweden {
    content: "🇸🇪";
    background-color: lightgray;
  }

  .ui-wrapper input#Austria:checked ~ .input-wrapper .textfield::before {
    content: "+43";
  }

  .ui-wrapper input#Belgium:checked ~ .input-wrapper .textfield::before {
    content: "+32";
  }

  .ui-wrapper input#Bulgaria:checked ~ .input-wrapper .textfield::before {
    content: "+359";
  }

  .ui-wrapper input#Croatia:checked ~ .input-wrapper .textfield::before {
    content: "+385";
  }

  .ui-wrapper input#Cyprus:checked ~ .input-wrapper .textfield::before {
    content: "+357";
  }

  .ui-wrapper input#Czech:checked ~ .input-wrapper .textfield::before {
    content: "+420";
  }

  .ui-wrapper input#Denmark:checked ~ .input-wrapper .textfield::before {
    content: "+45";
  }

  .ui-wrapper input#Estonia:checked ~ .input-wrapper .textfield::before {
    content: "+372";
  }

  .ui-wrapper input#Finland:checked ~ .input-wrapper .textfield::before {
    content: "+358";
  }

  .ui-wrapper input#France:checked ~ .input-wrapper .textfield::before {
    content: "+33";
  }

  .ui-wrapper input#Germany:checked ~ .input-wrapper .textfield::before {
    content: "+49";
  }

  .ui-wrapper input#Greece:checked ~ .input-wrapper .textfield::before {
    content: "+30";
  }

  .ui-wrapper input#Hungary:checked ~ .input-wrapper .textfield::before {
    content: "+36";
  }

  .ui-wrapper input#Iceland:checked ~ .input-wrapper .textfield::before {
    content: "+354";
  }

  .ui-wrapper input#Ireland:checked ~ .input-wrapper .textfield::before {
    content: "+353";
  }

  .ui-wrapper input#Italy:checked ~ .input-wrapper .textfield::before {
    content: "+39";
  }

  .ui-wrapper input#Latvia:checked ~ .input-wrapper .textfield::before {
    content: "+371";
  }

  .ui-wrapper input#Liechtenstein:checked ~ .input-wrapper .textfield::before {
    content: "+423";
  }

  .ui-wrapper input#Lithuania:checked ~ .input-wrapper .textfield::before {
    content: "+370";
  }

  .ui-wrapper input#Luxembourg:checked ~ .input-wrapper .textfield::before {
    content: "+352";
  }

  .ui-wrapper input#Malta:checked ~ .input-wrapper .textfield::before {
    content: "+356";
  }

  .ui-wrapper input#Netherlands:checked ~ .input-wrapper .textfield::before {
    content: "+31";
  }

  .ui-wrapper input#Norway:checked ~ .input-wrapper .textfield::before {
    content: "+47";
  }

  .ui-wrapper input#Poland:checked ~ .input-wrapper .textfield::before {
    content: "+48";
  }

  .ui-wrapper input#Portugal:checked ~ .input-wrapper .textfield::before {
    content: "+351";
  }

  .ui-wrapper input#Romania:checked ~ .input-wrapper .textfield::before {
    content: "+40";
  }

  .ui-wrapper input#Slovakia:checked ~ .input-wrapper .textfield::before {
    content: "+421";
  }

  .ui-wrapper input#Slovenia:checked ~ .input-wrapper .textfield::before {
    content: "+386";
  }

  .ui-wrapper input#Spain:checked ~ .input-wrapper .textfield::before {
    content: "+34";
  }

  .ui-wrapper input#Sweden:checked ~ .input-wrapper .textfield::before {
    content: "+46";
  }
`;

export default Input;
