import os

def test_background_color_is_red():
    with open('/workspace/src/app/globals.css', 'r') as f:
        content = f.read()
    assert '--background: #FF0000;' in content, "Background color is not set to red in globals.css"
