function TodoCtrl($scope)
{
	$scope.showtitle= function() {
	    var title = "index";
	    if(history.state)
		   title = history.state.title;
		return title;
    };
	$scope.changeTitle= function() {
	    $scope.labelTitle = history.state.title;
    };
	
	$scope.options = [
		{"text": "option1",
		 "title": "List",
		 "state_name": "List"},
		{"text": "option2",
		 "title": "List",
		 "state_name": "List"}
    ];
	
	$scope.lists = [
		{"text": "list1",
		 "title": "Detail",
		 "state_name": "Detail"},
		{"text": "list2",
		 "title": "Detail",
		 "state_name": "Detail"},
		{"text": "list3",
		 "title": "Detail",
		 "state_name": "Detail"}
    ];
}
