import 
  {createHTML}
from "./helper";
interface personal_object {
  name: string;
}
export const simpleHtml = (personal_info:personal_object) => () =>
  createHTML({
  content:
    `
    <html>
    <head>
        <meta content="text/html; charset=UTF-8" http-equiv="content-type">
        <style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c11{border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#ffffff;border-top-width:1pt;border-right-width:1pt;border-left-color:#ffffff;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:156pt;border-top-color:#000000;border-bottom-style:solid}.c9{border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:93.6pt;border-top-color:#000000;border-bottom-style:solid}.c4{border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:156pt;border-top-color:#000000;border-bottom-style:solid}.c18{border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#ffffff;border-top-width:1pt;border-right-width:1pt;border-left-color:#ffffff;vertical-align:top;border-right-color:#ffffff;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:156pt;border-top-color:#000000;border-bottom-style:solid}.c1{border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:117pt;border-top-color:#000000;border-bottom-style:solid}.c15{-webkit-text-decoration-skip:none;color:#000000;text-decoration:underline;vertical-align:baseline;text-decoration-skip-ink:none;font-size:11pt;font-family:"Arial";font-style:normal}.c3{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c12{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:10pt;font-family:"Arial";font-style:normal}.c6{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c2{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c0{padding-top:0pt;padding-bottom:0pt;line-height:1.0;text-align:left}.c8{border-spacing:0;border-collapse:collapse;margin-right:auto}.c17{background-color:#ffffff;max-width:468pt;padding:72pt 72pt 72pt 72pt}.c14{background-color:#ffd966}.c16{background-color:#ffff00}.c10{background-color:#f1c232}.c5{height:11pt}.c13{font-weight:700}.c7{height:0pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body
        class="c17"><p class="c2"><span class="c13 c15">Client&rsquo;s Profile
            </span></p><p class="c2 c5"><span class="c15 c13"></span></p><p
            class="c2"><span class="c3">Mr.(s) ${personal_info.name} ${console.log(personal_info)} <script>let a =0;console.log(a);</script>
            isyears
                old, and has A5____ children. </span></p><p class="c2"><span
                class="c3">He holds A6______ degree in A7_________ from
                A8____________ university. (Technical School)</span></p><p
            class="c2"><span class="c3">The client has more than A10_____ years
                of experience in A9_________ as he has been running &nbsp;a
                B1_______________ business since _____, in B3_________. </span></p><p
            class="c2 c5"><span class="c3"></span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2"><span class="c3">Mr.(s)A1________
                operates his (her) B1__________ business through PR4______ plot
                of PR3_____ sqm in PR1_____, PR2#__. Altitude ______ m </span></p><p
            class="c2 c5"><span class="c3"></span></p><p class="c2"><span
                class="c6">Other Sources of Income</span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2"><span class="c3">1- In
                addition, Mr.(s) A1__________ runs a side______ business for
                more than _______ years in _____, generating a monthly income of
                ______$. </span></p><p class="c2 c5"><span class="c3"></span></p><p
            class="c2"><span class="c3">2- In addition, Mr.(s) __________ has
                been employed at ______________ as _____________ in _________,
                since __________, generating a monthly income of _________ $.
            </span></p><p class="c2 c5"><span class="c3"></span></p><p class="c2
            c5"><span class="c3"></span></p><p class="c2"><span class="c6">The
                Business Status</span></p><p class="c2 c5"><span class="c6"></span></p><p
            class="c2"><span class="c3">The business is generating an annual
                revenue of _______, and the production is sold to ________ in
                _______, and ________ in _________. </span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2"><span class="c3">The client
                is assisted by _______ staff distributed as follows: </span></p><p
            class="c2 c5"><span class="c3"></span></p><a
            id="t.a891276e0eae7e84eba8bfcfc67b45722573db2f"></a><a id="t.0"></a><table
            class="c8"><tbody><tr class="c7"><td class="c4 c14" colspan="1"
                        rowspan="1"><p class="c0"><span class="c6">Responsibility
                            </span></p></td><td class="c4 c14" colspan="1"
                        rowspan="1"><p class="c0"><span class="c6">Description</span></p></td><td
                        class="c4 c14" colspan="1" rowspan="1"><p class="c0"><span
                                class="c6">Working Hours</span></p></td></tr><tr
                    class="c7"><td class="c4" colspan="1" rowspan="1"><p
                            class="c0 c5"><span class="c3"></span></p></td><td
                        class="c4" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c4" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr></tbody></table><p
            class="c2 c5"><span class="c3"></span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2"><span class="c3">(The client
                is assisted by __________ who handles the _________,
                ___________, _________.)</span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2"><span class="c3">The
                business currently contains the following equipment: </span></p><p
            class="c2 c5"><span class="c3"></span></p><a
            id="t.06a233d0c036bc353d1c136cce9fcac9a3af95c2"></a><a id="t.1"></a><table
            class="c8"><tbody><tr class="c7"><td class="c4 c14" colspan="1"
                        rowspan="1"><p class="c0"><span class="c6">Item </span></p></td><td
                        class="c4 c14" colspan="1" rowspan="1"><p class="c0"><span
                                class="c6">Quantity </span></p></td><td
                        class="c4 c14" colspan="1" rowspan="1"><p class="c0"><span
                                class="c6">Value </span></p></td></tr><tr
                    class="c7"><td class="c4" colspan="1" rowspan="1"><p
                            class="c0 c5"><span class="c3"></span></p></td><td
                        class="c4" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c4" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c4" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c18" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c11"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr></tbody></table><p
            class="c2 c5"><span class="c3"></span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2"><span class="c6">The
                Premises Description</span></p><p class="c2 c5"><span
                class="c6"></span></p><p class="c2"><span class="c3">Mr.(s)________
                operates his (her) __________ business through a rented (owned)
                plot (land) of _____ sqm in _____, #__. </span></p><p
            class="c2"><span class="c3">The land is located in _________,
                _________ m away from Beirut with an altitude of ________ m from
                the sea level. </span></p><p class="c2"><span class="c3">The
                land is surrounded by ___________, and currently planted with
                ___________, _________, _________. </span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2"><span class="c3">The
                premises has a total area of _______ sqm, extended over
                ________floor(s).</span></p><p class="c2"><span class="c3">The
                floor (first) consists of a space for ___________, another for
                ___________, in addition to a space for _________. </span></p><p
            class="c2"><span class="c3">(The second floor consists of a space
                for ___________, another for ___________, in addition to a space
                for _________.) </span></p><p class="c2 c5"><span class="c3"></span></p><p
            class="c2 c5"><span class="c3"></span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2"><span class="c6">New Project
            </span></p><p class="c2 c5"><span class="c6"></span></p><p class="c2
            c5"><span class="c6"></span></p><p class="c2"><span class="c3">The
                new project consists of developing the apiculture farm through
                acquiring the following equipment: </span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2 c5"><span class="c3"></span></p><a
            id="t.929d29e349a451a8f0ddc8f22874269ec844300d"></a><a id="t.2"></a><table
            class="c8"><tbody><tr class="c7"><td class="c1 c10" colspan="1"
                        rowspan="1"><p class="c0"><span class="c6">Item </span></p></td><td
                        class="c1 c10" colspan="1" rowspan="1"><p class="c0"><span
                                class="c6">Cost</span></p></td><td class="c1
                        c10" colspan="1" rowspan="1"><p class="c0"><span
                                class="c6">Quantity </span></p></td><td
                        class="c1 c10" colspan="1" rowspan="1"><p class="c0"><span
                                class="c6">Total </span></p></td></tr><tr
                    class="c7"><td class="c1" colspan="1" rowspan="1"><p
                            class="c0 c5"><span class="c3"></span></p></td><td
                        class="c1" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c1" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c1" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c1" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c1" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c1" colspan="1" rowspan="1"><p class="c0"><span
                                class="c6">Total </span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr></tbody></table><p
            class="c2"><span class="c13">Market Analysis</span><span class="c3">&nbsp;</span></p><p
            class="c2 c5"><span class="c3"></span></p><p class="c2"><span
                class="c3">Competition Analysis </span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2 c5"><span class="c3"></span></p><a
            id="t.92885ef0e77ad3458202fb56a6414acf415fbe3f"></a><a id="t.3"></a><table
            class="c8"><tbody><tr class="c7"><td class="c1" colspan="1"
                        rowspan="1"><p class="c0"><span class="c3">Competitor
                            </span></p></td><td class="c1" colspan="1"
                        rowspan="1"><p class="c0"><span class="c3">Strengths
                            </span></p></td><td class="c1" colspan="1"
                        rowspan="1"><p class="c0"><span class="c3">Weaknesses
                            </span></p></td><td class="c1" colspan="1"
                        rowspan="1"><p class="c0"><span class="c3">Competitive
                                Advantage</span></p></td></tr><tr class="c7"><td
                        class="c1" colspan="1" rowspan="1"><p class="c0"><span
                                class="c3">Competitor 1</span></p></td><td
                        class="c1" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c1" colspan="1" rowspan="1"><p class="c0"><span
                                class="c3">Competitor 2</span></p></td><td
                        class="c1" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c1" colspan="1" rowspan="1"><p class="c0"><span
                                class="c3">Competitor 3 </span></p></td><td
                        class="c1" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c1" colspan="1" rowspan="1"><p class="c0"><span
                                class="c3">Competitor 4</span></p></td><td
                        class="c1" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr></tbody></table><p
            class="c2 c5"><span class="c3"></span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2 c5"><span class="c3"></span></p><p
            class="c2"><span class="c13">The Funding</span><span class="c3">&nbsp;</span></p><p
            class="c2 c5"><span class="c3"></span></p><p class="c2"><span
                class="c3">Mr.(s) ___________ is requesting a loan of
                _____________$ over a period of ___ years to finance: &nbsp;</span></p><p
            class="c2"><span class="c3">1- 100% of the new project. </span></p><p
            class="c2"><span class="c3">2- &nbsp;___ % of the new project
                illustrated in the following table: </span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2 c5"><span class="c3"></span></p><a
            id="t.00662adf9ae2b2f1cb07105326104c2c6c9bba21"></a><a id="t.4"></a><table
            class="c8"><tbody><tr class="c7"><td class="c1 c10" colspan="1"
                        rowspan="1"><p class="c0"><span class="c6">Item </span></p></td><td
                        class="c1 c10" colspan="1" rowspan="1"><p class="c0"><span
                                class="c6">Cost</span></p></td><td class="c1
                        c10" colspan="1" rowspan="1"><p class="c0"><span
                                class="c6">Quantity </span></p></td><td
                        class="c1 c10" colspan="1" rowspan="1"><p class="c0"><span
                                class="c6">Total </span></p></td></tr><tr
                    class="c7"><td class="c1" colspan="1" rowspan="1"><p
                            class="c0 c5"><span class="c3"></span></p></td><td
                        class="c1" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c1" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c1" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr></tbody></table><p
            class="c2 c5"><span class="c3"></span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2 c5"><span class="c3"></span></p><p
            class="c2"><span class="c3">Client&rsquo;s contribution: </span></p><p
            class="c2 c5"><span class="c3"></span></p><p class="c2 c5"><span
                class="c3"></span></p><a
            id="t.d6119aab0c91841d010802743a27bffe4bb2cf14"></a><a id="t.5"></a><table
            class="c8"><tbody><tr class="c7"><td class="c1 c10" colspan="1"
                        rowspan="1"><p class="c0"><span class="c6">Item </span></p></td><td
                        class="c1 c10" colspan="1" rowspan="1"><p class="c0"><span
                                class="c6">Cost</span></p></td><td class="c1
                        c10" colspan="1" rowspan="1"><p class="c0"><span
                                class="c6">Quantity </span></p></td><td
                        class="c1 c10" colspan="1" rowspan="1"><p class="c0"><span
                                class="c6">Total </span></p></td></tr><tr
                    class="c7"><td class="c1" colspan="1" rowspan="1"><p
                            class="c0 c5"><span class="c3"></span></p></td><td
                        class="c1" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c1" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c1"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr></tbody></table><p
            class="c2 c5"><span class="c3"></span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2"><span class="c6">Feasibility
                Study </span></p><p class="c2 c5"><span class="c3"></span></p><p
            class="c2"><span class="c3">Sales Forecast </span></p><p class="c2
            c5"><span class="c3"></span></p><p class="c2"><span class="c3">Season
                1 </span></p><p class="c2 c5"><span class="c3"></span></p><a
            id="t.fc5d21a5540d6486bb49178e337fafa8022ddb56"></a><a id="t.6"></a><table
            class="c8"><tbody><tr class="c7"><td class="c9" colspan="1"
                        rowspan="1"><p class="c0"><span class="c12"># Beehives</span></p></td><td
                        class="c9" colspan="1" rowspan="1"><p class="c0"><span
                                class="c12">Productivity/Hive </span></p></td><td
                        class="c9" colspan="1" rowspan="1"><p class="c0"><span
                                class="c12 c16">Price/Kg</span></p></td><td
                        class="c9" colspan="1" rowspan="1"><p class="c0"><span
                                class="c12">Total </span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0"><span class="c12">Grand
                                Total </span></p></td></tr><tr class="c7"><td
                        class="c9" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr></tbody></table><p
            class="c2"><span class="c3">&nbsp;</span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2"><span class="c3">Season 2</span></p><p
            class="c2 c5"><span class="c3"></span></p><p class="c2 c5"><span
                class="c3"></span></p><a
            id="t.fc5d21a5540d6486bb49178e337fafa8022ddb56"></a><a id="t.7"></a><table
            class="c8"><tbody><tr class="c7"><td class="c9" colspan="1"
                        rowspan="1"><p class="c0"><span class="c12"># Beehives</span></p></td><td
                        class="c9" colspan="1" rowspan="1"><p class="c0"><span
                                class="c12">Productivity/Hive </span></p></td><td
                        class="c9" colspan="1" rowspan="1"><p class="c0"><span
                                class="c12 c16">Price/Kg</span></p></td><td
                        class="c9" colspan="1" rowspan="1"><p class="c0"><span
                                class="c12">Total </span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0"><span class="c12">Grand
                                Total </span></p></td></tr><tr class="c7"><td
                        class="c9" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr></tbody></table><p
            class="c2 c5"><span class="c3"></span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2"><span class="c13">Annual
                Revenue</span><span class="c3">: _______ $</span></p><p
            class="c2 c5"><span class="c3"></span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2 c5"><span class="c3"></span></p><p
            class="c2 c5"><span class="c3"></span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2 c5"><span class="c3"></span></p><p
            class="c2 c5"><span class="c3"></span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2 c5"><span class="c3"></span></p><p
            class="c2 c5"><span class="c3"></span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2 c5"><span class="c3"></span></p><p
            class="c2"><span class="c3">Expenses </span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2"><span class="c3">Raw
                materials </span></p><a
            id="t.d211fb2aca2001c9747df528c9e013e5a9be02e6"></a><a id="t.8"></a><table
            class="c8"><tbody><tr class="c7"><td class="c9" colspan="1"
                        rowspan="1"><p class="c0"><span class="c6">Item </span></p></td><td
                        class="c9" colspan="1" rowspan="1"><p class="c0"><span
                                class="c6">Unit </span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0"><span class="c6">Quantity
                            </span></p></td><td class="c9" colspan="1"
                        rowspan="1"><p class="c0"><span class="c6">Cost</span></p></td><td
                        class="c9" colspan="1" rowspan="1"><p class="c0"><span
                                class="c6">Total </span></p></td></tr><tr
                    class="c7"><td class="c9" colspan="1" rowspan="1"><p
                            class="c0 c5"><span class="c3"></span></p></td><td
                        class="c9" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c9" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c9" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c9" colspan="1" rowspan="1"><p class="c0"><span
                                class="c3">Grand Total </span></p></td><td
                        class="c9" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c9"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr></tbody></table><p
            class="c2 c5"><span class="c3"></span></p><p class="c2"><span
                class="c3">Salaries &amp; Wages</span></p><a
            id="t.e808236a01aa60a579af854cded2a744a100cfb1"></a><a id="t.9"></a><table
            class="c8"><tbody><tr class="c7"><td class="c4" colspan="1"
                        rowspan="1"><p class="c0"><span class="c3">Employee</span></p></td><td
                        class="c4" colspan="1" rowspan="1"><p class="c0"><span
                                class="c3">Monthly Salary </span></p></td><td
                        class="c4" colspan="1" rowspan="1"><p class="c0"><span
                                class="c3">Annual Salary</span></p></td></tr><tr
                    class="c7"><td class="c4" colspan="1" rowspan="1"><p
                            class="c0 c5"><span class="c3"></span></p></td><td
                        class="c4" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c4" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c4" colspan="1" rowspan="1"><p class="c0"><span
                                class="c3">Grand Total </span></p></td><td
                        class="c4" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr></tbody></table><p
            class="c2 c5"><span class="c3"></span></p><p class="c2"><span
                class="c3">Others </span></p><a
            id="t.945c645fee78baef155259dfc0dc700ade9e33f0"></a><a id="t.10"></a><table
            class="c8"><tbody><tr class="c7"><td class="c4" colspan="1"
                        rowspan="1"><p class="c0"><span class="c3">Item</span></p></td><td
                        class="c4" colspan="1" rowspan="1"><p class="c0"><span
                                class="c3">Monthly Amount </span></p></td><td
                        class="c4" colspan="1" rowspan="1"><p class="c0"><span
                                class="c3">Annual Amount </span></p></td></tr><tr
                    class="c7"><td class="c4" colspan="1" rowspan="1"><p
                            class="c0 c5"><span class="c3"></span></p></td><td
                        class="c4" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c4" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr><tr class="c7"><td
                        class="c4" colspan="1" rowspan="1"><p class="c0"><span
                                class="c3">Grand Total </span></p></td><td
                        class="c4" colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td><td class="c4"
                        colspan="1" rowspan="1"><p class="c0 c5"><span
                                class="c3"></span></p></td></tr></tbody></table><p
            class="c2 c5"><span class="c3"></span></p><p class="c2 c5"><span
                class="c3"></span></p><p class="c2"><span class="c3">Total
                Annual Expenses </span></p><p class="c2 c5"><span class="c3"></span></p><p
            class="c2 c5"><span class="c3"></span></p></body></html>
  `
  });

