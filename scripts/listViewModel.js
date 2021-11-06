function ListViewModel() {
    var self = this;

    self.neueFilme = ko.observableArray(demoData.neueFilme);
    self.derzeitBeliebt = ko.observableArray(demoData.derzeitBeliebt);
    self.nochmalAnsehen = ko.observableArray(demoData.nochmalAnsehen);

    self.selectedMovie = ko.observable(undefined);
    self.showModal = ko.observable(false);
    self.playTrailer = ko.observable(false);

    self.selectMovie = function(movie) {
        self.selectedMovie(movie);
        self.showModal(true);
        if(movie.trailerURL !== '') {
            self.playTrailer(true);
        }
    }

    self.closeModal = function() {
        self.showModal(false);
        self.playTrailer(false);
    }
};
ko.applyBindings(new ListViewModel());