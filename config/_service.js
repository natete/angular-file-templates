/**
 * @author {{{author}}}
 * @since {{{date}}}
 */

(function () {
    'use strict';

    angular
        .module('{{{moduleName}}}')
        .service('{{{elementName}}}', {{{elementName}}});

    /* @ngInject */
    function {{{elementName}}} ($log) {
        var service = {};

        /// Service Public API ///
        service.method = method;
        ///////////////

        return service;

        ///////////////

        function method() {
            // TODO autogenerated method stub...
        }

    }
})();
