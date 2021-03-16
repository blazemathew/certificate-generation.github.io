import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-handlebars";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

const AceEditorPanel = ({editorValue,setEditorValue}) => {
    const onChange = (newValue) => {
        setEditorValue(newValue);
      }
    return(
        <div>
            <AceEditor
                placeholder="Placeholder Text"
                mode="handlebars"
                theme="monokai"
                name="blah2"
                onChange={(e)=>onChange(e)}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={editorValue}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
            />
        </div>
    );
} 

export default AceEditorPanel;