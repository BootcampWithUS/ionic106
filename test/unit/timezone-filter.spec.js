describe('Filtro Timezone', function() {

  beforeEach(module('App'));

  it('Deberia convertir timestamp y timezone a la hora local', inject(function(timezoneFilter) {
    expect(timezoneFilter(1424004482, 'America/Chicago')).toContain('6:48 AM');
    expect(timezoneFilter(1424042649, 'America/Chicago')).toContain('5:24 PM');
  }));
});
