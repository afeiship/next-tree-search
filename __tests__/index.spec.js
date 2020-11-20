(function() {
  const NxTreeSearch = require('../src');
  const menus = require('./menu.json');

  describe('NxTreeSearch.methods', function () {
    test('static tree find should return value or undefind:', () => {
      var res1 = NxTreeSearch.find(menus, (_, item) => {
        return item.value === '/admin/space/:id/setting';
      });
      var res2 = NxTreeSearch.find(menus, (_, item) => {
        return item.value === '/admin/space/:id/not-exits';
      });

      expect(res1).toEqual({ label: '空间设置', value: '/admin/space/:id/setting' });
      expect(res2).toBe(undefined);
    });

    test('static tree filter should return an array:', () => {
      var res1 = NxTreeSearch.filter(menus, (_, item) => {
        return item.value.startsWith('/admin/team');
      });

      var res2 = NxTreeSearch.filter(menus, (_, item) => {
        return item.value.startsWith('/admin/not-exists-value');
      });

      expect(res1).toEqual([
        { label: '团队', value: '/admin/team/member-list' },
        { label: '团体', value: '/admin/team/team' }
      ]);

      expect(res2).toEqual([]);
    });
  });

})();
