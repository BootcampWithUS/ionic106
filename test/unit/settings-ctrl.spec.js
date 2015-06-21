describe('Controlador Settings', function () {
  var scope, locationsService;

  var chicago = {
    city: 'Chicago, IL, USA',
    lat: 41.8781136,
    lng: -87.6297982
  };

  beforeEach(module('App'));

  beforeEach(inject(function ($rootScope, $controller, Locations) {
    scope = $rootScope.$new();
    locationsService = Locations;
    $controller('SettingsController', {
      $scope: scope
    });
  }));

  it('Deberia cargar con Settings y Locaciones por defecto', function () {
    expect(scope.settings.units).toEqual('us');
    expect(scope.locations.length).toEqual(0);
    expect(scope.canDelete).toEqual(false);
  });

})
