var subjects = {
    "arts": ["art_hist", "music", "std_art"],
    "eng": ["lit", "lang"],
    "hss": ["comp_gov", "euro", "human", "macro", "micro", "psych", "gov", "ush", "world"],
    "mcs": ["ab", "bc", "cs", "stats"],
    "sci": ["bio", "chem", "env", "phys_b", "em", "mech"],
    "langs": ["ch", "fr", "ger", "jpn", "lat", "sp_lang", "sp_lit"],
};

var units = {
    "art_hist": 8,
    "music": 8,
    "std_art": 8,
    "lit": 8,
    "lang": 8,
    "comp_gov": 4,
    "euro": 8,
    "human": 4,
    "macro": 4,
    "micro": 4,
    "psych": 4,
    "gov": 4,
    "ush": 8,
    "world": 8,
    "ab": 4,
    "bc": 8,
    "cs": 2,
    "stats": 4,
    "bio": 8,
    "chem": 8,
    "env": 4,
    "phys_b": 8,
    "em": 4,
    "mech": 4,
    "ch": 8,
    "fr": 8,
    "ger": 8,
    "jpn": 8,
    "lat": 8,
    "sp_lang": 8,
    "sp_lit": 8,
};

var dict = {
    "arts": "Arts",
    "eng": "English",
    "hss": "History & Social Sciences",
    "mcs": "Math & Computer Science",
    "sci": "Sciences",
    "langs": "Languages",
    "art_hist": "Art History",
    "music": "Music Theory",
    "std_art": "Studio Art",
    "lit": "English Literature",
    "lang": "English Language",
    "comp_gov": "Comparative Government",
    "euro": "European History",
    "human": "Human Geography",
    "macro": "Macroeconomics",
    "micro": "Microeconomics",
    "psych": "Psychology",
    "gov": "US Government",
    "ush": "US History",
    "world": "World History",
    "ab": "Calculus AB",
    "bc": "Calculus BC",
    "cs": "Computer Science A",
    "stats": "Statistics",
    "bio": "Biology",
    "chem": "Chemistry",
    "env": "Environmental Science",
    "phys_b": "Physics B",
    "em": "Physics C: EM",
    "mech": "Physics C: Mechanics",
    "ch": "Chinese",
    "fr": "French",
    "ger": "German",
    "jpn": "Japanese",
    "lat": "Latin",
    "sp_lang": "Spanish Language",
    "sp_lit": "Spanish Literature",
};

var reqs_chem = {
    "art_hist": "3 units of credit (for each test) toward the Breadth requirement (Group II)",
    "music": "3 units of credit (for each test) toward the Breadth requirement (Group II)",
    "std_art": "",
    "lit": "3 satisfies Entry-Level Writing. 4 satisfies R1A req with 4 units of credit toward the Breadth requirement (Group I). 5 satisfies R1B req with 5.3 units of credit total toward the Breadth req (Group I)",
    "lang": "3 satisfies Entry-Level Writing. 4+ satisfies R1A req with 4 units of credit toward the Breadth requirement (Group I).",
    "comp_gov": "2.7 units of credit (for each test) toward the Breadth requirement (Group II)",
    "euro": "3 units of credit (for each test) toward the Breadth requirement (Group II)",
    "human": "2.7 units of credit (for each test) toward the Breadth requirement (Group II)",
    "macro": "2.7 units of credit (for each test) toward the Breadth requirement (Group II)",
    "micro": "2.7 units of credit (for each test) toward the Breadth requirement (Group II)",
    "psych": "2.7 units of credit (for each test) toward the Breadth requirement (Group II)",
    "gov": "2.7 units of credit (for each test) toward the Breadth requirement (Group II)",
    "ush": "3 units of credit (for each test) toward the Breadth requirement (Group II)",
    "world": "3 units of credit (for each test) toward the Breadth requirement (Group II)",
    "ab": "Math 1A",
    "bc": "3 or 4 satisfies Math 1A. 5 satisfies Math 1A and 1B.",
    "cs": "",
    "stats": "",
    "bio": "For chemical biology or chemical engineering majors, 4+ satisfies 1A and 1AL.",
    "chem": "",
    "env": "",
    "phys_b": "",
    "em": "If sum of EM and Mech is greater than 8, Physics 7A is satisified.",
    "mech": "If sum of EM and Mech is greater than 8, Physics 7A is satisified.",
    "ch": "For chemical engineering majors, 5.3 units of credit (for each test) toward the Breadth requirement (Group II). Note: For chemical engineering majors, no more than 6 units of foreign language may be counted toward the Breadth requirement (Group II). For chemistry or chemical biology majors, each test satisfies either the Foreign Language requirement or 5.3 units of credit toward the Breadth requirement (Group II)",
    "fr": "For chemical engineering majors, 5.3 units of credit (for each test) toward the Breadth requirement (Group II). Note: For chemical engineering majors, no more than 6 units of foreign language may be counted toward the Breadth requirement (Group II). For chemistry or chemical biology majors, each test satisfies either the Foreign Language requirement or 5.3 units of credit toward the Breadth requirement (Group II)",
    "ger": "For chemical engineering majors, 5.3 units of credit (for each test) toward the Breadth requirement (Group II). Note: For chemical engineering majors, no more than 6 units of foreign language may be counted toward the Breadth requirement (Group II). For chemistry or chemical biology majors, each test satisfies either the Foreign Language requirement or 5.3 units of credit toward the Breadth requirement (Group II)",
    "jpn": "For chemical engineering majors, 5.3 units of credit (for each test) toward the Breadth requirement (Group II). Note: For chemical engineering majors, no more than 6 units of foreign language may be counted toward the Breadth requirement (Group II). For chemistry or chemical biology majors, each test satisfies either the Foreign Language requirement or 5.3 units of credit toward the Breadth requirement (Group II)",
    "lat": "For chemical engineering majors, 2.7 units of credit (for each test) toward the Breadth requirement (Group II). For chemistry or chemical biology majors, each test satisfies either the Foreign Language requirement or 2.7 units of credit toward the Breadth requirement (Group II)",
    "sp_lang": "For chemical engineering majors, 5.3 units of credit (for each test) toward the Breadth requirement (Group II). Note: For chemical engineering majors, no more than 6 units of foreign language may be counted toward the Breadth requirement (Group II). For chemistry or chemical biology majors, each test satisfies either the Foreign Language requirement or 5.3 units of credit toward the Breadth requirement (Group II)",
    "sp_lit": "For chemical engineering majors, 3 units of credit (for each test) toward the Breadth requirement (Group II). For chemistry or chemical biology majors, each test satisfies either the Foreign Language requirement or 3 units of credit toward the Breadth requirement (Group II)",
};

var reqs_eng = {
    "art_hist": "One lower division H/SS",
    "music": "One lower division H/SS",
    "std_art": "One lower division H/SS",
    "lit": "3 satisfies Entry Level Writing. 4+ satisfies Reading and Comp 'A'",
    "lang": "3 satisfies Entry Level Writing. 4+ satisfies Reading and Comp 'A'",
    "comp_gov": "One lower division H/SS",
    "euro": "One lower division H/SS",
    "human": "One lower division H/SS",
    "macro": "One lower division H/SS",
    "micro": "One lower division H/SS",
    "psych": "One lower division H/SS",
    "gov": "One lower division H/SS",
    "ush": "One lower division H/SS",
    "world": "One lower division H/SS",
    "ab": "3+ satisfies Math 1A",
    "bc": "3 satisfies Math 1A. 4+ satisfies Math 1A and 1B.",
    "cs": "",
    "stats": "",
    "bio": "4+ satisfies Bio 1A/1AL and 1B",
    "chem": "3+ satisfies Chem 1A/1AL",
    "env": "",
    "phys_b": "",
    "em": "",
    "mech": "5 satisfies Physics 7A",
    "ch": "One lower division H/SS",
    "fr": "One lower division H/SS",
    "ger": "One lower division H/SS",
    "jpn": "One lower division H/SS",
    "lat": "One lower division H/SS",
    "sp_lang": "One lower division H/SS",
    "sp_lit": "One lower division H/SS",
};

var reqs_ls = {
    "art_hist": "",
    "music": "",
    "std_art": "",
    "lit": "3 satisfies Entry Level Writing. 4 satisfies 1st half of Reading and Comp. 5 satisfies 2nd half of Reading and Comp.",
    "lang": "3 satisfies Entry Level Writing. 4+ satisfies 1st half Reading and Comp",
    "comp_gov": "",
    "euro": "",
    "human": "",
    "macro": "Scores of 4-5 on both exams are equivalent to Economics 1 or 2.",
    "micro": "Scores of 4-5 on both exams are equivalent to Economics 1 or 2.",
    "psych": "",
    "gov": "",
    "ush": "Satisfies the American History and Institutions requirement.",
    "world": "",
    "ab": "3+ satisfies Math 1A & 16A. Satisfies Quantitative Reasoning requirement.",
    "bc": "3 satisfies Math 1A & 16A. 4+ satisfies Math 1A and 1B, 16A and 16B. Satisfies Quantitative Reasoning requirement.",
    "cs": "",
    "stats": "",
    "bio": "4+ satisfies Bio 1A/1AL and 1B",
    "chem": "4+ satisfies Chem 1A/1AL",
    "env": "",
    "phys_b": "",
    "em": "",
    "mech": "",
    "ch": "Satisfies Foreign Language requirement.",
    "fr": "Satisfies Foreign Language requirement.",
    "ger": "Satisfies Foreign Language requirement.",
    "jpn": "Satisfies Foreign Language requirement.",
    "lat": "Satisfies Foreign Language requirement.",
    "sp_lang": "Satisfies Foreign Language requirement.",
    "sp_lit": "Satisfies Foreign Language requirement.",
};

var reqs_haas = {
    "art_hist": "",
    "music": "",
    "std_art": "",
    "lit": "3 satisfies Entry Level Writing. 4 satisfies 1st half of Reading and Comp. 5 satisfies 2nd half of Reading and Comp.",
    "lang": "3 satisfies Entry Level Writing. 4+ satisfies 1st half Reading and Comp",
    "comp_gov": "",
    "euro": "",
    "human": "",
    "macro": "Scores of 5 on both exams are equivalent to Economics 1 or 2.",
    "micro": "Scores of 5 on both exams are equivalent to Economics 1 or 2.",
    "psych": "",
    "gov": "",
    "ush": "",
    "world": "",
    "ab": "",
    "bc": "5 satisfies Math 1A and 16A.",
    "cs": "",
    "stats": "",
    "bio": "",
    "chem": "",
    "env": "",
    "phys_b": "",
    "em": "",
    "mech": "",
    "ch": "Satisfies Foreign Language requirement.",
    "fr": "Satisfies Foreign Language requirement.",
    "ger": "Satisfies Foreign Language requirement.",
    "jpn": "Satisfies Foreign Language requirement.",
    "lat": "Satisfies Foreign Language requirement.",
    "sp_lang": "Satisfies Foreign Language requirement.",
    "sp_lit": "Satisfies Foreign Language requirement.",
};

var reqs_cnr = {
    "art_hist": "",
    "music": "",
    "std_art": "",
    "lit": "3 satisfies Entry Level Writing. 4 satisfies 1st half of Reading and Comp. 5 satisfies 2nd half of Reading and Comp.",
    "lang": "3 satisfies Entry Level Writing. 4+ satisfies 1st half Reading and Comp",
    "comp_gov": "",
    "euro": "",
    "human": "",
    "macro": "EEP, MT (3+), NS (3+), S&E: 4+ on both exams satisfies Economics 1.",
    "micro": "EEP, MT (3+), NS (3+), S&E: 4+ on both exams satisfies Economics 1. Also satisfies EEP C1.",
    "psych": "",
    "gov": "",
    "ush": "",
    "world": "",
    "ab": "All: 3+ Satisfies Math 1A and 16A.",
    "bc": "All: 3+ Satisfies Math 1A and 16A. EEP, ES, FNR, GPB, MEB, MB: 5 satisfies Math 1B and 16B.",
    "cs": "",
    "stats": "CRS, FNR, GPB, MEB, MB, MT, NS, S&E: 3+ satisfies Stats 2.",
    "bio": "ES, CRS, FNR, MEB: 4+ satisfies Biology 1A, 1B or 11",
    "chem": "ES, CRS, FNR, GPB (3+), MEB, MB (3+), MT, NS: 4+ Satisfies Chem 1A.",
    "env": "ES, CRS, FNR, MEB, S&E: 4+ satisfies ESPM 15 or ESPM C10.",
    "phys_b": "GPB, MB: 3+ satisfies Physics 8A.",
    "em": "",
    "mech": "",
    "ch": "EEP: Satisfies Foreign Language requirement.",
    "fr": "EEP: Satisfies Foreign Language requirement.",
    "ger": "EEP: Satisfies Foreign Language requirement.",
    "jpn": "EEP: Satisfies Foreign Language requirement.",
    "lat": "EEP: Satisfies Foreign Language requirement.",
    "sp_lang": "EEP: Satisfies Foreign Language requirement.",
    "sp_lit": "EEP: Satisfies Foreign Language requirement.",
};

var college_dict = {'ls': reqs_ls, 'chem': reqs_chem, 'eng': reqs_eng, 'haas': reqs_haas, 'cnr': reqs_cnr};
var college = 'ls';
var listed = [];
var category = null;
var subject = null;
var score = 5;
var credits = 0;
var standing = 'Freshman';
var li_beg = '<li><a id=';
var li_mid = ' tabindex="-1" href="#" class="cat-element">'
var li_mid_x = ' tabindex="-1" href="#" class="sub-element">'
var li_end = '</a></li>';
var li_header_beg = '<li role="presentation" class="dropdown-header">'
var li_header_end = '</li>';
var ul_header = '<ul class="dropdownz-menu col-md-4">';
var ul_end = '</ul>'

var load_sub = function() {
    if (category) {
        $("#sub-button").removeClass("disabled");
        var sub_items = "";
        var subs = subjects[category];
        var sub_len = subjects[category].length;
        console.log(subs);
        for (var i = 0; i < sub_len; i++) {
            if ($.inArray(subs[i], listed) < 0) {
                sub_items += li_beg + subs[i] + li_mid_x + dict[subs[i]] + li_end;
            }
        }
        $('.sub-element').click(function() {
            subject = $(this).attr('id');
            $('#sub').text(dict[subject]);
            console.log(subject + " clicked");
        });
        $("#sub-drop").html(sub_items);
        $('.sub-element').click(function() {
            subject = $(this).attr('id');
            $('#sub').text(dict[subject])});
    };
};

var update = function() {
    updateUnits();
    if (credits < 30) {
        standing = 'Freshman';
    } else if (credits < 60) {
        standing = 'Sophomore';
    } else if (credits < 90) {
        standing = 'Junior';
    } else {
        standing = 'Senior';
    }

    $("#standing").text(standing);
    $("#units").text(credits);

};

var updateUnits = function() {
    arts = 0;
    eng = 0;
    calc = 0;
    phys = 0;
    var listed_length = listed.length;
    count = 0;
    for (var i = 0; i < listed_length; i++) {
        if (_.indexOf(subjects["eng"], listed[i]) >= 0) {
            eng = 8;
        } else if (listed[i] === 'ab' || listed[i] === 'bc') {
            calc += units[listed[i]];
            if (calc > 8) {
                calc = 8;
            }
        } else if (_.indexOf(['em', 'mech', 'phys_b'], listed[i]) >= 0) {

            phys += units[listed[i]];
            if (phys > 8) {
                phys = 8;
            }

        } else {
            count += parseFloat((units[listed[i]] * 1.0 / 1.5).toFixed(1));

        }
    }
    count += arts / 1.5 + eng / 1.5 + calc / 1.5 + phys / 1.5;
    count = parseFloat(count.toFixed(1));
    credits = count;
    credits = parseFloat(credits.toFixed(1));
    console.log(count);
};

var buildTable = function() {
    $("#ap-table").html("");
    var listed_length = listed.length;
    for (var i = 0; i < listed_length; i++) {
        units_add = parseFloat(units[subject] / 1.5).toFixed(1);
        table_add = '<tr id="' + listed[i] + 'x"><td>' + dict[listed[i]] + '</td>'
        + '<td>' + score + '</td>'
        + '<td>' + units_add + '</td>'
        + '<td>' + college_dict[college][listed[i]] + '</td>'
        + '<td>' + '<a href="#" class="fa fa-times-circle remove" id="' + listed[i] + '"></a>' + '</td>';

        $("#ap-table").html($("#ap-table").html() + table_add);
    }
    console.log("Build table called");	
};

$(function() {
    category = null;
    cat_items = "";
    for (var sub in subjects) {
        cat_items += li_beg + sub + li_mid + dict[sub] + li_end;
    }

    $("#cat-drop").html(cat_items);
    if (!category) {
        $("#sub-button").addClass("disabled");
        console.log("Button disabled");
    }
    $('.cat-element').click(function() {
        new_cat = $(this).attr('id');
        if (category !== new_cat) {
            $("#sub").html('Select <span class="caret"></span>');
            subject = null;
            console.log("Button disabled for new category");
        }
        category = new_cat;
        $('#cat').text(dict[category]);
        console.log(category + " clicked");
        load_sub();
    });
    $('.score-num').click(function() {
        score = parseInt($(this).text());
        $('#score').text(score);
    });
    $('.college-choice').click(function() {
        $('#college').text($(this).text());
        college = $(this).attr('id');
        console.log("Changing college to " + college);
        buildTable();
        $('.remove').click(function() {
            console.log("Remove called");
            var item = $(this).attr("id");

            $(this).closest('tr').remove();
            listed = _.without(listed, item);
            console.log(item + " to be removed " + listed);
            update();
            load_sub();
        });
    })
    $('#add').click(function() {
        if (subject && _.indexOf(listed, subject) < 0) {
            units_add = parseFloat(units[subject] / 1.5).toFixed(1);
            table_add = '<tr id="' + subject + 'x"><td>' + dict[subject] + '</td>'
            + '<td>' + score + '</td>'
            + '<td>' + units_add + '</td>'
            + '<td>' + college_dict[college][subject] + '</td>'
            + '<td>' + '<a href="#" class="fa fa-times-circle remove" id="' + subject + '"></a>' + '</td>';

            $("#ap-table").html($("#ap-table").html() + table_add);
            listed.push(subject);
            update();
            load_sub();
        }
        $('.remove').click(function() {
            console.log("Remove called");
            var item = $(this).attr("id");

            $(this).closest('tr').remove();
            listed = _.without(listed, item);
            console.log(item + " to be removed " + listed);
            update();
            load_sub();
        });
        console.log("Add pushed " + subject);
    });
    $('.remove').click(function() {
        console.log("Remove called");
        var item = $(this).attr("id");

        $(this).closest('tr').remove();
        listed = _.without(listed, item);
        console.log(item + " to be removed " + listed);
        update();
        load_sub();
    });
});










