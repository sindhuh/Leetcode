console.log(palindromePairs(["aegdgcgcfcgafcbihci", "gecbcdgbhjdhjjcjfbd",
    "cdjbaffijd", "dic", "adggiigaagj", "jfijedfbghhhfddbe", "cjggaggffccbii", "g", "c", "dehjgeehgda",
    "fbjecadfadcejha", "heeafjddadchi", "idafi", "dieahfgfiehgcedc", "je", "hihgeihcehjcf", "ihgjej",
    "bchggfbabadbjj", "ecgehaagfgcibbgb", "jgabecafba", "hjaaacebhjcecbbfc", "aecfe", "hbfaeai", "gaegif",
    "geijeiaeccjcf", "a", "hhh", "ehjjhiadjiacdibhjaf", "cbegigbecaai", "h", "aajachagjdg", "higaeb", "cjeh",
    "b", "cjfdbeiejcecbcdbcajj", "dihhchhbfegf", "edjfhhjihdcgbaiai", "icjeehhbfdaaebfa", "afhabecahagjefi",
    "hf", "gjbiijjfjdf", "gijcide", "jbheae", "cicdhbgghacgcgi", "hegicjebfdjhebigci", "dgbceaahii",
    "gjgfbcigdgjcaieaecb", "jjggaagaiiifbhhfe", "gfdfgegjagjfjjaaabj", "gidiedddbecjh", "hdeegbf", "cjc",
    "feij", "ccchegbbfggjfjjedf", "dfggg", "abcjhhdcghf", "gfbdiggece", "acgbbjiijecaefade", "ejfjdegbab",
    "ebbe", "dcfajhfcfdbc", "cjgedeibdfaffjbag", "bbci", "cj", "jff", "fjcjd", "fjcjfgj", "aegjhjjddhcjcajbejij",
    "fdhhhdc", "eecb", "hihjhaccedadbiigbef",
    "hcgeigicfdieifa", "jfafgbib", "fjffebjgciibaggggach", "jiccfhfaddciiddeae", "ahcafjjech", "hiedhe", "ijhejfciaehfebgj",
    "ajcbcgdgajidgciacg", "j", "gfbdjehej", "bajibaafj", "acjd", "ehhai", "ghgddaiejecig", "aidcjfhfdidiccaig",
    "e", "heddghede", "fbfh", "efchgfjgjbbicjb", "ecjdjgjbi", "eddehdcidccc", "ghehgfgifdaacijcifj", "fdjjj",
    "ejhfadjadciceffij", "hhejdj", "jjcijeejabeijh",
    "gifdheahjefeeddeed", "hfgb", "deeaabd", "hfgifida", "cjfbdaifeeij", "ijbdj", "ecdcgf", "ebaaiddhghahdejib",
    "eajjifajg", "aideidjgfbgi", "gjddhcefieeidi",
    "dagdgehbifgecgjbajb", "igeigadidghhggij", "cecedgfhgehgcdabadcd", "fgjehehh", "ijaihjeaegbgbcjegehh",
    "jhbhcidbcibaccjbcdi", "ecfebjjgdbhhgj", "hieedbaddheihi",
    "chabccbdjicdhdjaegdg",
    "fdjadgbbbheda", "gjagiafebibadbi", "ccjbgfijfdafbdeac", "bhhdfghec", "hfbg", "dggghjbiiaf", "cdbdheggcbaeajfcfh",
    "jfbaijecddbe", "gddbfeaeidfcceb", "caj", "fjhigghiieafg", "deghigjcdjgecg", "hh", "djbgdghbdcfhedbf", "aeiehc",
    "iaejgiahh", "bhjhjfijj", "ifhcjahecbbhajji", "ha",
    "eechaegadhabhicbcefh",
    "ebciabg", "fjccidibdhicag", "ahjbcdjhhd", "beg", "hebhiacbiajecbb", "hgcge", "dhgaecficeiabffg",
    "gciifacjdcc", "fadjggabaha", "iecigbc", "ajbcjejgaed", "bfachb", "ejdeheighigbeccahfg", "hcheecfejhciii",
    "bcdbffiagfhbefb", "cegcjcbbceab", "gfjgeigg", "gbadajfebija",
    "dadjgdegagjdddj", "dgchi",
    "hgdhbaabgeidhej", "fccfdciicehiib", "aihjaaeffaijdgacfd", "aeghgegf", "hbfg", "adafhdfcjhg",
    "cejiahjbcabcdiaccbc", "bdiegadeefd", "aaijcjdhbe", "feifdffjibaebghjddjh", "cfdcegffafjjca", "bgc", "iefjcbhad",
    "eeaa", "ffbhdbef", "eb",
    "geaacjdfbgjgfcjc", "gdfi", "jefdjecfegdifcbdb", "aaeifhfjfjd", "hag", "jfiadhbbihedhgb", "eaaadcgjfgjbgfcd", "ejaaijbfaf",
    "abhfaifdiij", "eaggegijhcccfehgieea", "jigffeggjchbfdij", "egjfidedbeeaejeceaca",
    "eehhdgahgfcaiefbfb", "dfaaeahdhiefaiae", "fbgedaiafdgehedh", "eihhigcgafjf",
    "jgjhh", "ifijdjjcfdehcb", "cbjedfgehej", "efdhjchefjjbaide", "iiifgd", "debjcabjfdij", "cgjjifbhdgfecgjgg", "iefch", "acfi",
    "bifbdgigbjhgb", "gfa", "aedfdbagfcajhadhfc", "dghgbihdgdachbedijc", "dchbcbdadhibdbi", "adfdehgfdh", "eehifheehdbedebcjej", "eg", "ihjidfdbcgffcicdi",
    "jhjbb", "cihbhcibj", "hbbfgba", "hbf", "ciaibacabgidaabgc", "bdbdhd", "dgjheegebjefdai", "ciaeggigdebhjehj",
    "ibjhfgbe", "ddjbfhic", "efdgbfdiahaefigea", "fgdafeddebbcaaa", "jbebj", "jcjjiafbfh", "hecbdgfhaiidh",
    "gdchhaaeefie", "cgegdbifh", "cdebcbe", "fbbgideab", "hdijfdbbdiheahjf", "icgj", "ib", "ebcjdbagaejb"]));
function palindromePairs(words) {
    var result = [];
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words.length; j++) {
            if (i == j) {

            } else {
                if (isPalindrome(words[i] + words[j])) {
                    result.push([i, j]);
                }
            }
        }
    }
    return result;
}

function isPalindrome(word) {
    return word == word.split("").reverse().join("");
}
