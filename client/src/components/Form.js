import React from "react";


const Form = props =>{
        return (
            <form onSubmit={props.getPredictions}>
                <select id="route" name="route" onChange = {props.handleChange}>
                    <option value="">--Select a Bus Route--</option>
                    <option value="1"> 1 - Bronzeville/Union Station </option>
                    <option value="2"> 2 - Hyde Park Express</option>
                    <option value="3">3 - King Drive</option>
                    <option value="4">4 - Cottage Grove</option>
                    <option value="5">5 - South Shore Night Bus</option>
                    <option value="6">6 - Jackson Park Express</option>
                    <option value="7">7 - Harrison</option>
                    <option value="8">8 - Halsted</option>
                    <option value="8A">8A - South Halsted</option>
                    <option value="9">9 - Ashland</option>
                    <option value="X9">X9 - Ashland Express</option>
                    <option value="11">11 - Lincoln</option>
                    <option value="12">12 - Roosevelt</option>
                    <option value="J14">J14 - Jeffery Jump</option>
                    <option value="15">15 - Jeffery Local</option>
                    <option value="18">18 - 16th/18th</option>
                    <option value="19">19 - United Center Express</option>
                    <option value="20">20 - Madison</option>
                    <option value="21">21 - Cermak</option>
                    <option value="22">22 - Clark</option>
                    <option value="24">24 - Wentworth</option>
                    <option value="26">26 - South Shore Express</option>
                    <option value="28">28 - Stony Island</option>
                    <option value="29">29 - State</option>
                    <option value="30">30 - South Chicago</option>
                    <option value="31">31 - 31st</option>
                    <option value="34">34 - South Michigan</option>
                    <option value="35">35 - 31st/35th</option>
                    <option value="36">36 - Broadway</option>
                    <option value="37">37 - Sedgwick</option>
                    <option value="39">39 - Pershing</option>
                    <option value="43">43 - 43rd</option>
                    <option value="44">44 - Wallace-Racine</option>
                    <option value="47">47 - 47th</option>
                    <option value="48">48 - South Damen</option>
                    <option value="49">49 - Western</option>
                    <option value="49B">49B - North Western</option>
                    <option value="X49">X49 - Western Express</option>
                    <option value="50">50 - Damen</option>
                    <option value="51">51 - 51st</option>
                    <option value="52">52 - Kedzie/California</option>
                    <option value="52A">52A - South Kedzie</option>
                    <option value="53">53 - Pulaski</option>
                    <option value="53A">53A - South Pulaski</option>
                    <option value="54">54 - Cicero</option>
                    <option value="54A">
                        54A - North Cicero/Skokie Blvd.
                    </option>
                    <option value="54B">54B - South Cicero</option>
                    <option value="55">55 - Garfield</option>
                    <option value="55A">55A - 55th/Austin</option>
                    <option value="55N">55N - 55th/Narragansett</option>
                    <option value="56">56 - Milwaukee</option>
                    <option value="57">57 - Laramie</option>
                    <option value="59">59 - 59th/61st</option>
                    <option value="60">60 - Blue Island/26th</option>
                    <option value="62">62 - Archer</option>
                    <option value="62H">62H - Archer/Harlem</option>
                    <option value="63">63 - 63rd</option>
                    <option value="63W">63W - West 63rd</option>
                    <option value="65">65 - Grand</option>
                    <option value="66">66 - Chicago</option>
                    <option value="67">67 - 67th-69th-71st</option>
                    <option value="68">68 - Northwest Highway</option>
                    <option value="70">70 - Division</option>
                    <option value="71">71 - 71st/South Shore</option>
                    <option value="72">72 - North</option>
                    <option value="73">73 - Armitage</option>
                    <option value="74">74 - Fullerton</option>
                    <option value="75">75 - 74th-75th</option>
                    <option value="76">76 - Diversey</option>
                    <option value="77">77 - Belmont</option>
                    <option value="78">78 - Montrose</option>
                    <option value="79">79 - 79th</option>
                    <option value="80">80 - Irving Park</option>
                    <option value="81">81 - Lawrence</option>
                    <option value="81W">81W - West Lawrence</option>
                    <option value="82">82 - Kimball-Homan</option>
                    <option value="84">84 - Peterson</option>
                    <option value="85">85 - Central</option>
                    <option value="85A">85A - North Central</option>
                    <option value="86">86 - Narragansett/Ridgeland</option>
                    <option value="87">87 - 87th</option>
                    <option value="88">88 - Higgins</option>
                    <option value="90">90 - Harlem</option>
                    <option value="91">91 - Austin</option>
                    <option value="92">92 - Foster</option>
                    <option value="93">93 - California/Dodge</option>
                    <option value="94">94 - South California</option>
                    <option value="95">95 - 95th</option>
                    <option value="96">96 - Lunt</option>
                    <option value="97">97 - Skokie</option>
                    <option value="X98">X98 - Avon Express</option>
                    <option value="100">100 - Jeffery Manor Express</option>
                    <option value="103">103 - West 103rd</option>
                    <option value="106">106 - East 103rd</option>
                    <option value="108">108 - Halsted/95th</option>
                    <option value="111">111 - 111th/King Drive</option>
                    <option value="111A">111A - Pullman Shuttle</option>
                    <option value="112">112 - Vincennes/111th</option>
                    <option value="115">115 - Pullman/115th</option>
                    <option value="119">119 - Michigan/119th</option>
                    <option value="120">
                        120 - Ogilvie/Streeterville Express
                    </option>
                    <option value="121">
                        121 - Union/Streeterville Express
                    </option>
                    <option value="124">124 - Navy Pier</option>
                    <option value="125">125 - Water Tower Express</option>
                    <option value="126">126 - Jackson</option>
                    <option value="132">132 - Goose Island Express</option>
                    <option value="134">
                        134 - Stockton/LaSalle Express
                    </option>
                    <option value="135">
                        135 - Clarendon/LaSalle Express
                    </option>
                    <option value="136">
                        136 - Sheridan/LaSalle Express
                    </option>
                    <option value="143">
                        143 - Stockton/Michigan Express
                    </option>
                    <option value="146">
                        146 - Inner Drive/Michigan Express
                    </option>
                    <option value="147">147 - Outer Drive Express</option>
                    <option value="148">
                        148 - Clarendon/Michigan Express
                    </option>
                    <option value="151">151 - Sheridan</option>
                    <option value="152">152 - Addison</option>
                    <option value="155">155 - Devon</option>
                    <option value="156">156 - LaSalle</option>
                    <option value="157">157 - Streeterville/Taylor</option>
                    <option value="165">165 - West 65th</option>
                    <option value="169">169 - 69th-UPS Express</option>
                    <option value="171">171 - U. of Chicago/Hyde Park</option>
                    <option value="172">172 - U. of Chicago/Kenwood</option>
                    <option value="192">
                        192 - U. of Chicago Hospitals Express
                    </option>
                    <option value="201">201 - Central/Ridge</option>
                    <option value="205">205 - Chicago/Golf</option>
                    <option value="206">206 - Evanston Circulator</option>
                </select>
                <select id = "direction" name = "direction" onChange = {props.handleDirChange}>
                    <option value="">--Select a Direction--</option>
                    {props.direction.map(e => <option value={e.dir}>{e.dir}</option>)}

                </select>
                <select id = "stops" name = "stops" onChange = {props.handleStop}> 
                    <option value="">--Select a Stop--</option>
                    {props.stops.map(e => <option value={e.stpid}>{e.stpnm}</option>)}
                </select>
                <button>Find Your information!</button>
          </form>
        );
};

export default Form;
