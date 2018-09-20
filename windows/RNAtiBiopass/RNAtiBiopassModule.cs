using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Ati.Biopass.RNAtiBiopass
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNAtiBiopassModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNAtiBiopassModule"/>.
        /// </summary>
        internal RNAtiBiopassModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNAtiBiopass";
            }
        }
    }
}
