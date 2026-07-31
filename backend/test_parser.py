print("START")

from app.services.response_parser import ResponseParser

sample = """
Executive Summary

Machine failure caused production stoppage.

Root Cause Analysis

Bearing failure due to lack of maintenance.

Business Impact

Production delayed by 8 hours.

Executive Recommendation

Replace bearing and introduce predictive maintenance.
"""

result = ResponseParser.parse(sample)

print(result)

print("END")