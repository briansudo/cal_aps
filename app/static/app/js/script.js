var subjects = [
	{//only using subjects listed here http://admission.universityofcalifornia.edu/counselors/exam-credit/ib-credits/index.html
		'eng': ['engA1', 'engA2','engB'], 
		'langs': ['arf','arb','ch','dn','du','fin','fr','ger','gre','heb','hin','indo','ita','jp','lat','mal','nor','per','pi','pol','port','ru','ser','sis','slo','sp','swa','swe','turk','urdu','wel'], 
		'social': ['anthro','econ','geo','hist','philo','psych'],
		'scimat': ['bio','chem','cs','mat2','mat','phys','es'], 
		'arts': ['dance','music','film','act','visart']
	},
	{
		'arts': ['art_hist', 'music', 'std_art'],
		'eng': ['lit', 'lang'],
		'hss': ['comp_gov', 'euro', 'human', 'macro', 'micro', 'psych', 'gov', 'ush', 'world'],
		'mcs': ['ab', 'bc', 'cs', 'stats'],
		'sci': ['bio', 'chem', 'env', 'phys_b', 'em', 'mech'],
		'langs': ['ch', 'fr', 'ger', 'jpn', 'lat', 'sp_lang', 'sp_lit']
	}
];

var dict = [
	{
		'eng': 'English',
		'langs': 'Languages',
		'social': 'Individuals & Societes',
		'scimat': 'Science & Math',
		'arts': 'Arts',
		'engA1': 'English A1(English: Literature)',
		'engA2': 'English A2',
		'engB': 'English B',
		'arf':'Afrikaans',
		'arb':'Arabic',
		'ch':'Chinese',
		'dn':'Danish',
		'du':'Dutch',
		'fin':'Finnish',
		'fr':'French',
		'ger':'German',
		'gre':'Greek(Modern)',
		'heb':'Hebrew',
		'hin':'Hindi',
		'indo':'Indonesian',
		'ita':'Italian',
		'jp':'Japanese',
		'lat':'Latin',
		'mal':'Malay',
		'nor':'Norwegian',
		'per':'Persian',
		'pi':'Pilipino',
		'pol':'Polish',
		'port':'Portuguese',
		'ru':'Russian',
		'ser':'Serb-Croat',
		'sis':'Siswati',
		'slo':'Slovene',
		'sp':'Spanish',
		'swa':'Swahili',
		'swe':'Swedish',
		'turk':'Turkish',
		'urdu':'Urdu',
		'wel':'Welsh',
		'anthro':'Anthropology',
		'econ':'Economics',
		'geo':'Geography',
		'hist':'History',
		'philo':'Philosophy',
		'psych':'Psychology',
		'bio':'Biology',
		'chem':'Chemistry',
		'cs':'Computer Science',
		'mat2':'Further Mathematics',
		'mat':'Mathematics',
		'phys':'Physics',
		'es':'Environmental Systems',
		'dance':'Dance',
		'music':'Music',
		'film':'Film',
		'act':'Theatre Arts',
		'visart': 'Visual Arts'
	},
	{
		'arts': 'Arts',
		'eng': 'English',
		'hss': 'History & Social Sciences',
		'mcs': 'Math & Computer Science',
		'sci': 'Sciences',
		'langs': 'Languages',
		'art_hist': 'Art History',
		'music': 'Music Theory',
		'std_art': 'Studio Art',
		'lit': 'English Literature',
		'lang': 'English Language',
		'comp_gov': 'Comparative Government',
		'euro': 'European History',
		'human': 'Human Geography',
		'macro': 'Macroeconomics',
		'micro': 'Microeconomics',
		'psych': 'Psychology',
		'gov': 'US Government',
		'ush': 'US History',
		'world': 'World History',
		'ab': 'Calculus AB',
		'bc': 'Calculus BC',
		'cs': 'Computer Science A',
		'stats': 'Statistics',
		'bio': 'Biology',
		'chem': 'Chemistry',
		'env': 'Environmental Science',
		'phys_b': 'Physics B',
		'em': 'Physics C: EM',
		'mech': 'Physics C: Mechanics',
		'ch': 'Chinese',
		'fr': 'French',
		'ger': 'German',
		'jpn': 'Japanese',
		'lat': 'Latin',
		'sp_lang': 'Spanish Language',
		'sp_lit': 'Spanish Literature'
	}
];

var units = {
	'art_hist': 8,
	'music': 8,
	'std_art': 8,
	'lit': 8,
	'lang': 8,
	'comp_gov': 4,
	'euro': 8,
	'human': 4,
	'macro': 4,
	'micro': 4,
	'psych': 4,
	'gov': 4,
	'ush': 8,
	'world': 8,
	'ab': 4,
	'bc': 8,
	'cs': 2,
	'stats': 4,
	'bio': 8,
	'chem': 8,
	'env': 4,
	'phys_b': 8,
	'em': 4,
	'mech': 4,
	'ch': 8,
	'fr': 8,
	'ger': 8,
	'jpn': 8,
	'lat': 8,
	'sp_lang': 8,
	'sp_lit': 8
};

var reqs_chem = {
    'art_hist': '3 units of credit (for each test) toward the Breadth requirement (Group II)',
    'music': '3 units of credit (for each test) toward the Breadth requirement (Group II)',
    'std_art': '',
    'lit': '3 satisfies Entry-Level Writing. 4 satisfies R1A req with 4 units of credit toward the Breadth requirement (Group I). 5 satisfies R1B req with 5.3 units of credit total toward the Breadth req (Group I)',
    'lang': '3 satisfies Entry-Level Writing. 4+ satisfies R1A req with 4 units of credit toward the Breadth requirement (Group I).',
    'comp_gov': '2.7 units of credit (for each test) toward the Breadth requirement (Group II)',
    'euro': '3 units of credit (for each test) toward the Breadth requirement (Group II)',
    'human': '2.7 units of credit (for each test) toward the Breadth requirement (Group II)',
    'macro': '2.7 units of credit (for each test) toward the Breadth requirement (Group II)',
    'micro': '2.7 units of credit (for each test) toward the Breadth requirement (Group II)',
    'psych': '2.7 units of credit (for each test) toward the Breadth requirement (Group II)',
    'gov': '2.7 units of credit (for each test) toward the Breadth requirement (Group II)',
    'ush': '3 units of credit (for each test) toward the Breadth requirement (Group II)',
    'world': '3 units of credit (for each test) toward the Breadth requirement (Group II)',
    'ab': 'Math 1A',
    'bc': '3 or 4 satisfies Math 1A. 5 satisfies Math 1A and 1B.',
    'cs': '',
    'stats': '',
    'bio': 'For chemical biology or chemical engineering majors, 4+ satisfies 1A and 1AL.',
    'chem': '',
    'env': '',
    'phys_b': '',
    'em': 'If sum of EM and Mech is greater than 8, Physics 7A is satisified.',
    'mech': 'If sum of EM and Mech is greater than 8, Physics 7A is satisified.',
    'ch': 'For chemical engineering majors, 5.3 units of credit (for each test) toward the Breadth requirement (Group II). Note: For chemical engineering majors, no more than 6 units of foreign language may be counted toward the Breadth requirement (Group II). For chemistry or chemical biology majors, each test satisfies either the Foreign Language requirement or 5.3 units of credit toward the Breadth requirement (Group II)',
    'fr': 'For chemical engineering majors, 5.3 units of credit (for each test) toward the Breadth requirement (Group II). Note: For chemical engineering majors, no more than 6 units of foreign language may be counted toward the Breadth requirement (Group II). For chemistry or chemical biology majors, each test satisfies either the Foreign Language requirement or 5.3 units of credit toward the Breadth requirement (Group II)',
    'ger': 'For chemical engineering majors, 5.3 units of credit (for each test) toward the Breadth requirement (Group II). Note: For chemical engineering majors, no more than 6 units of foreign language may be counted toward the Breadth requirement (Group II). For chemistry or chemical biology majors, each test satisfies either the Foreign Language requirement or 5.3 units of credit toward the Breadth requirement (Group II)',
    'jpn': 'For chemical engineering majors, 5.3 units of credit (for each test) toward the Breadth requirement (Group II). Note: For chemical engineering majors, no more than 6 units of foreign language may be counted toward the Breadth requirement (Group II). For chemistry or chemical biology majors, each test satisfies either the Foreign Language requirement or 5.3 units of credit toward the Breadth requirement (Group II)',
    'lat': 'For chemical engineering majors, 2.7 units of credit (for each test) toward the Breadth requirement (Group II). For chemistry or chemical biology majors, each test satisfies either the Foreign Language requirement or 2.7 units of credit toward the Breadth requirement (Group II)',
    'sp_lang': 'For chemical engineering majors, 5.3 units of credit (for each test) toward the Breadth requirement (Group II). Note: For chemical engineering majors, no more than 6 units of foreign language may be counted toward the Breadth requirement (Group II). For chemistry or chemical biology majors, each test satisfies either the Foreign Language requirement or 5.3 units of credit toward the Breadth requirement (Group II)',
    'sp_lit': 'For chemical engineering majors, 3 units of credit (for each test) toward the Breadth requirement (Group II). For chemistry or chemical biology majors, each test satisfies either the Foreign Language requirement or 3 units of credit toward the Breadth requirement (Group II)',
};

var reqs_eng = {
    'art_hist': 'One lower division H/SS',
    'music': 'One lower division H/SS',
    'std_art': 'One lower division H/SS',
    'lit': '3 satisfies Entry Level Writing. 4+ satisfies Reading and Comp "A"',
    'lang': '3 satisfies Entry Level Writing. 4+ satisfies Reading and Comp "A"',
    'comp_gov': 'One lower division H/SS',
    'euro': 'One lower division H/SS',
    'human': 'One lower division H/SS',
    'macro': 'One lower division H/SS',
    'micro': 'One lower division H/SS',
    'psych': 'One lower division H/SS',
    'gov': 'One lower division H/SS',
    'ush': 'One lower division H/SS',
    'world': 'One lower division H/SS',
    'ab': '3+ satisfies Math 1A',
    'bc': '3 satisfies Math 1A. 4+ satisfies Math 1A and 1B.',
    'cs': '',
    'stats': '',
    'bio': '4+ satisfies Bio 1A/1AL and 1B',
    'chem': '3+ satisfies Chem 1A/1AL',
    'env': '',
    'phys_b': '',
    'em': '',
    'mech': '5 satisfies Physics 7A',
    'ch': 'One lower division H/SS',
    'fr': 'One lower division H/SS',
    'ger': 'One lower division H/SS',
    'jpn': 'One lower division H/SS',
    'lat': 'One lower division H/SS',
    'sp_lang': 'One lower division H/SS',
    'sp_lit': 'One lower division H/SS',
};

var reqs_ls = {
    'art_hist': '',
    'music': '',
    'std_art': '',
    'lit': '3 satisfies Entry Level Writing. 4 satisfies 1st half of Reading and Comp. 5 satisfies 2nd half of Reading and Comp.',
    'lang': '3 satisfies Entry Level Writing. 4+ satisfies 1st half Reading and Comp',
    'comp_gov': '',
    'euro': '',
    'human': '',
    'macro': 'Scores of 4-5 on both exams are equivalent to Economics 1 or 2.',
    'micro': 'Scores of 4-5 on both exams are equivalent to Economics 1 or 2.',
    'psych': '',
    'gov': '',
    'ush': 'Satisfies the American History and Institutions requirement.',
    'world': '',
    'ab': '3+ satisfies Math 1A & 16A. Satisfies Quantitative Reasoning requirement.',
    'bc': '3 satisfies Math 1A & 16A. 4+ satisfies Math 1A and 1B, 16A and 16B. Satisfies Quantitative Reasoning requirement.',
    'cs': '',
    'stats': 'Satisfies Quantitative Reasoning requirement.',
    'bio': '4+ satisfies Bio 1A/1AL and 1B',
    'chem': '4+ satisfies Chem 1A/1AL',
    'env': '',
    'phys_b': '',
    'em': '',
    'mech': '',
    'ch': 'Satisfies Foreign Language requirement.',
    'fr': 'Satisfies Foreign Language requirement.',
    'ger': 'Satisfies Foreign Language requirement.',
    'jpn': 'Satisfies Foreign Language requirement.',
    'lat': 'Satisfies Foreign Language requirement.',
    'sp_lang': 'Satisfies Foreign Language requirement.',
    'sp_lit': 'Satisfies Foreign Language requirement.',
};

var reqs_haas = {
    'art_hist': '',
    'music': '',
    'std_art': '',
    'lit': '3 satisfies Entry Level Writing. 4 satisfies 1st half of Reading and Comp. 5 satisfies 2nd half of Reading and Comp.',
    'lang': '3 satisfies Entry Level Writing. 4+ satisfies 1st half Reading and Comp',
    'comp_gov': '',
    'euro': '',
    'human': '',
    'macro': 'Scores of 5 on both exams are equivalent to Economics 1 or 2.',
    'micro': 'Scores of 5 on both exams are equivalent to Economics 1 or 2.',
    'psych': '',
    'gov': '',
    'ush': '',
    'world': '',
    'ab': '',
    'bc': '5 satisfies Math 1A and 16A.',
    'cs': '',
    'stats': '',
    'bio': '',
    'chem': '',
    'env': '',
    'phys_b': '',
    'em': '',
    'mech': '',
    'ch': 'Satisfies Foreign Language requirement.',
    'fr': 'Satisfies Foreign Language requirement.',
    'ger': 'Satisfies Foreign Language requirement.',
    'jpn': 'Satisfies Foreign Language requirement.',
    'lat': 'Satisfies Foreign Language requirement.',
    'sp_lang': 'Satisfies Foreign Language requirement.',
    'sp_lit': 'Satisfies Foreign Language requirement.',
};

var reqs_cnr = {
    'art_hist': '',
    'music': '',
    'std_art': '',
    'lit': '3 satisfies Entry Level Writing. 4 satisfies 1st half of Reading and Comp. 5 satisfies 2nd half of Reading and Comp.',
    'lang': '3 satisfies Entry Level Writing. 4+ satisfies 1st half Reading and Comp',
    'comp_gov': '',
    'euro': '',
    'human': '',
    'macro': 'EEP, MT (3+), NS (3+), S&E: 4+ on both exams satisfies Economics 1.',
    'micro': 'EEP, MT (3+), NS (3+), S&E: 4+ on both exams satisfies Economics 1. Also satisfies EEP C1.',
    'psych': '',
    'gov': '',
    'ush': '',
    'world': '',
    'ab': 'All: 3+ Satisfies Math 1A and 16A.',
    'bc': 'All: 3+ Satisfies Math 1A and 16A. EEP, ES, FNR, GPB, MEB, MB: 5 satisfies Math 1B and 16B.',
    'cs': '',
    'stats': 'CRS, FNR, GPB, MEB, MB, MT, NS, S&E: 3+ satisfies Stats 2.',
    'bio': 'ES, CRS, FNR, MEB: 4+ satisfies Biology 1A, 1B or 11',
    'chem': 'ES, CRS, FNR, GPB (3+), MEB, MB (3+), MT, NS: 4+ Satisfies Chem 1A.',
    'env': 'ES, CRS, FNR, MEB, S&E: 4+ satisfies ESPM 15 or ESPM C10.',
    'phys_b': 'GPB, MB: 3+ satisfies Physics 8A.',
    'em': '',
    'mech': '',
    'ch': 'EEP: Satisfies Foreign Language requirement.',
    'fr': 'EEP: Satisfies Foreign Language requirement.',
    'ger': 'EEP: Satisfies Foreign Language requirement.',
    'jpn': 'EEP: Satisfies Foreign Language requirement.',
    'lat': 'EEP: Satisfies Foreign Language requirement.',
    'sp_lang': 'EEP: Satisfies Foreign Language requirement.',
    'sp_lit': 'EEP: Satisfies Foreign Language requirement.',
};

var reqs_ced = {
    'art_hist': 'Arts & Literature OR Historical Studies',
    'music': 'Arts & Literature',
    'std_art': 'Arts & Literature',
    'lit': '3 satisfies Entry Level Writing. 4 satisfies 1st half of Reading and Comp. 5 satisfies 2nd half of Reading and Comp.',
    'lang': '3 satisfies Entry Level Writing. 4+ satisfies 1st half Reading and Comp',
    'comp_gov': 'International Studies (all majors) OR Social & Behavioral Studies (LA and Arch majors only)',
    'euro': 'Historical Studies',
    'human': 'Social & Behavioral Sciences (LA and Arch majors only)',
    'macro': 'Social & Behavioral Sciences (Arch and LA majors only)',
    'micro': 'Social & Behavioral Sciences (all majors); fulfills Economics requirement for US majors and CP minors.',
    'psych': 'Social & Behavioral Sciences (LA and Arche majors only)',
    'gov': 'Social & Behavioral Sciences (LA and Arch majors only)',
    'ush': 'American History & Institutions, Historical Studies',
    'world': 'Historical Studies OR International Studies',
    'ab': 'Math 16A',
    'bc': 'Math 16A',
    'cs': '',
    'stats': 'Statistics 2 (US majors and CP minors)',
    'bio': 'Biological Science (US and Arch majors only)',
    'chem': 'Physical Science (US majors only)',
    'env': 'Physical Science (US only), Biological Science (all majors); fulfills lower division biology requirement for LA majors.',
    'phys_b': 'Physical Science (US and LA majors only)',
    'em': 'Physical Science (US and LA majors only)',
    'mech': 'Physical Science (all majors); lower division physics requirement for Arch and LA majors',
    'ch': 'International Studies',
    'fr': 'International Studies',
    'ger': 'International Studies',
    'jpn': 'International Studies',
    'lat': 'EACH exam satisfies Arts & Literature',
    'sp_lang': 'International Studies',
    'sp_lit': 'International Studies OR Arts & Literature',
};

//need to merge with reqs_eng 
//Score of 5,6 or 7 = 5.3 units; If taken as part of diploma units capped at 20
var ib_eng = {
	'art':'One lower division Humanities/Social Science',
	'bio':'Biology 1A/1AL and Biology 1B',
	'chem':'Chemistry 1A/1AL',
	'cs':'CompSci 61B, if student completes CS47B at UCB',
	'eocn':'One lower division Humanities/Social Science',
	'engA1':'Entry Level Writing & Reading & Comp "A"',
	'engA2':'One lower division Humanities/Social Science',
	'engB':'None',
	'fr':'One lower division Humanities/Social Science',
	'geo':'One lower division Humanities/Social Science',
	'ger':'One lower division Humanities/Social Science',
	'greek':'One lower division Humanities/Social Science',
	'us':'One lower division Humanities/Social Science',
	'eurp':'One lower division Humanities/Social Science',
	'lat':'One lower division Humanities/Social Science',
	'math':'Math 1A and Math 1B',
	'music':'One lower division Humanities/Social Science',
	'philo':'One lower division Humanities/Social Science',
	'phys':'None', //No credits given
	'port':'One lower division Humanities/Social Science',
	'sp':'One lower division Humanities/Social Science',
	'theater':'One lower division Humanities/Social Science'
}


// Dictionary of colleges and their corresponding requirements
var college_dict = {'ls': reqs_ls, 'chem': reqs_chem, 'eng': reqs_eng, 'haas': reqs_haas, 'cnr': reqs_cnr, 'ced': reqs_ced};

// Add and remove classes from this array. This prevents duplicates since
// we just have to check if a class is in here before we populate the dropdowns.
var listed = [];

// ON INITIALIZATION
var college  = 'ls';
var category = null;
var subject  = null;
var score    = 5;
var credits  = 0;
var standing = 'Freshman';
var using_ap = 1;   // If using IB, using_ap is 0

// CODE FOR LIST ELEMENT
// var proper_li_ele = li_beg + SOME_ID + li_mid(_x) + dict[SOME_ID] + li_end;
var li_beg   = '<li><a id   = ';
var li_mid   = ' tabindex   = "-1" href = "#" class = "cat-element">'
var li_mid_x = ' tabindex   = "-1" href = "#" class = "sub-element">'
var li_end   = '</a></li>';

// Populates the subjects dropdown
var load_sub = function() {
    if (category) {
        $('#sub-button').removeClass('disabled');
        var sub_items = '';
        var subs      = subjects[using_ap][category];
        var sub_len   = subjects[using_ap][category].length;
        console.log(subs);
        for (var i = 0; i < sub_len; i++) {
            if ($.inArray(subs[i], listed) < 0) {
                sub_items += li_beg + subs[i] + li_mid_x + dict[using_ap][subs[i]] + li_end;
            }
        }
        $('.sub-element').click(function() {
            subject = $(this).attr('id');
            $('#sub').text(dict[using_ap].subject);
            console.log(subject + ' clicked');
        });
        $('#sub-drop').html(sub_items);
        $('.sub-element').click(function() {
            subject = $(this).attr('id');
            $('#sub').text(dict[using_ap].subject)});
    };
};

// Updates the standing
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

    $('#standing').text(standing);
    $('#units').text(credits);
};

// Calculates how many units student has earned with selected classes
var updateUnits = function() {
    var arts = 0;
    var eng  = 0;
    var calc = 0;
    var phys = 0;
    var listed_length = listed.length;
    var count = 0;
    for (var i = 0; i < listed_length; i++) {
        if (_.indexOf(subjects['eng'], listed[i]) >= 0) {
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
    console.log(count);
};

// Using listed, the array of classes added, build the table with college specific reqs.
// Used when the college is changed.
var buildTable = function() {
    console.log('Build table called');
    $('#ap-table').html('');
    var listed_length = listed.length;
    for (var i = 0; i < listed_length; i++) {
        units_add = parseFloat(units[subject] / 1.5).toFixed(1);
        table_add = '<tr id="' + listed[i] + 'x"><td>' + dict[listed[i]] + '</td>'
        + '<td>' + score + '</td>'
        + '<td>' + units_add + '</td>'
        + '<td>' + college_dict[college][listed[i]] + '</td>'
        + '<td>' + '<span class="fa fa-times-circle remove" id="' + listed[i] + '"></span>' + '</td>';
        $('#ap-table').html($('#ap-table').html() + table_add);
    }
    addRemoveHandler();	
};

// Removes an item from the table and from listed
var addRemoveHandler = function() {
    $('.remove').click(function() {
        console.log('Remove called');
        var item = $(this).attr('id');
        $(this).closest('tr').remove();
        listed = _.without(listed, item);
        console.log(item + ' to be removed ' + listed);
        update();
        load_sub();
    });
}

// Initializes the dropdown category
var initCategoryDropdown = function() {
    cat_items = '';
    for (var sub in subjects[using_ap]) {
        cat_items += li_beg + sub + li_mid + dict[using_ap][sub] + li_end;
    }
    $('#cat-drop').html(cat_items);
    if (!category) {
        $('#sub-button').addClass('disabled');
        console.log('Button disabled');
    }
}

// When a category is clicked, change the subject dropdown to Select <caret> and
// call load_sub to properly populate the subjects dropdown
var categoryElementClickHandler = function() {
    $('.cat-element').click(function() {
        new_cat = $(this).attr('id');
        if (category !== new_cat) {
            $('#sub').html('Select <span class="caret"></span>');
            subject = null;
            console.log('Button disabled for new category');
        }
        category = new_cat;
        $('#cat').text(dict[using_ap][category]);
        console.log(category + ' clicked');
        load_sub();
    });
}

// Add an element to the table and to listed, then update the subjects dropdown so
// the class won't be in the dropdown menu again
var addToTable = function() {
    $('#add').click(function() {
        if (subject && _.indexOf(listed, subject) < 0) {
            units_add = parseFloat(units[subject] / 1.5).toFixed(1);
            table_add = '<tr id="' + subject + 'x"><td>' + dict[subject] + '</td>'
            + '<td>' + score + '</td>'
            + '<td>' + units_add + '</td>'
            + '<td>' + college_dict[college][subject] + '</td>'
            + '<td>' + '<span class="fa fa-times-circle remove" id="' + subject + '"></span>' + '</td>';

            $('#ap-table').html($('#ap-table').html() + table_add);
            listed.push(subject);
            update();
            load_sub();
        }
        addRemoveHandler();
        console.log('Add pushed ' + subject);
    });
}

// Change college and rebuild the table with the correct requirements
var collegeChangeHandler = function() {
    $('.college-choice').click(function() {
        $('#college').text($(this).text());
        college = $(this).attr('id');
        console.log('Changing college to ' + college);
        buildTable();
        
    });
}

// Change the score (We don't use the score for anything at the moment)
var scoreChangeHandler = function() {
    $('.score-num').click(function() {
        score = parseInt($(this).text());
        $('#score').text(score);
    });
}

var populateCategoryDropdown = function() {
    if(using_ap){
		//do AP stuff
	}else{
		//Do IB stuff
	}
}

var switchAPIB = function() {
    $('.type').click(function() {
		using_ap = parseInt($(this).attr('data-using-ap'));
		$(this).removeClass('btn-default').addClass('btn-primary disabled');
		$('.type').not(this).removeClass('btn-primary disabled').addClass('btn-default');
	});
    populateCategoryDropdown();
}

$(function() {
    initCategoryDropdown();
    categoryElementClickHandler();
    collegeChangeHandler();
    scoreChangeHandler();
    addToTable();
});










