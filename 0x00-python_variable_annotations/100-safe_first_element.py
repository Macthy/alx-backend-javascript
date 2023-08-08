#!/usr/bin/env python3
from typing import Sequence, Any, Union, Optional

def safe_first_element(lst: Sequence[Any]) -> Union[Any, Optional[None]]:
    """Returns the first element of a sequence if it exists, otherwise None."""
    if lst:
        return lst[0]
    else:
        return None

